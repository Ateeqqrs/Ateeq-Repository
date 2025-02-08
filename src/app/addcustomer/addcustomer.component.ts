import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CustomerService } from '../customerservice.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-emp-form',
  templateUrl: './addcustomer.component.html',
  styles: []
})
export class EmpFormComponent implements OnInit {
  @Output() emitData = new EventEmitter();

  maxDate = new Date().toJSON().split('T')[0];
  minDate = new Date('2000-12-30').toJSON().split('T')[0];

  data = {};
  submitted = false;
  addForm: FormGroup;
  IsCustomerNumberAlreadyExist =  false;

  constructor(private location: Location, private fb: FormBuilder,
              private customerService: CustomerService, private router: Router,
              public notifier: NotifierService) {
    this.addForm = this.fb.group({
      CustomerNumber: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      CustomerName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      DateOfBirth: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      Gender: ['', [Validators.required]],
    });
  }
  ngOnInit() {
  }
  get f() { return this.addForm.controls; }

  addCustomer(type: string, message: string): void {
    debugger;
    this.submitted = true;
    //if (this.addForm.invalid == false) {
    // return;
    //}
    this.customerService.addCustomer(this.data);

    this.notifier.notify(type, message);
    this.emitData.emit(this.submitted);
    this.router.navigate(['/customerlist'])
          .then(() => {
            window.location.reload();
          });
    
  }
  onBlurMethod(ele){
  debugger;

  this.customerService.IsCustomerNumberAlreadyExist(parseInt(ele.data.CustomerNumber)).subscribe((result) => {
  
    this.IsCustomerNumberAlreadyExist = result;
  
  });

    //alert(ele.data.CustomerNumberele) ;
   }
  
  back() {
    this.location.back();
  }
}
