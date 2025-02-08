import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customerservice.service';
import { Router } from '@angular/router';
import { Location, getLocaleDateFormat } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-emp',
  templateUrl: './updatecustomer.component.html',
  styles: [],
  providers: [DatePipe]
})
export class UpdateCustomerComponent implements OnInit {
  maxDate = new Date().toJSON().split('T')[0];
  minDate = new Date('2000-01-01').toJSON().split('T')[0];
  customer = {};
  updateForm: FormGroup;
  myDate = new Date();

  constructor(private location: Location, private fb: FormBuilder, 
    private datePipe: DatePipe,
    private customerService: CustomerService, 
    private router: Router) {
    
  }
  get validControl() { return this.updateForm.controls; }
  get f() { return this.updateForm.controls; }
  ngOnInit() {
    this.updateForm = this.fb.group({
      CustomerId: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
      CustomerNumber: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]],
      CustomerName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4)]],
      DateOfBirth: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')]],
      Gender: ['', [Validators.required]],
    });
    debugger;
    //this.f_data = this.customerService.editData;
    var customerId = parseInt(this.router.url.split('/')[2]);
    this.customerService.getCustomerByID(customerId).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully
      //this.customers = result; 
      //console.log(result);
      //this.customer =  result;
      debugger;
      this.updateForm.controls['CustomerId'].setValue(result.customerId); 
      this.updateForm.controls['CustomerNumber'].setValue(result.customerNumber); 
      this.updateForm.controls['CustomerName'].setValue(result.customerName);
      this.updateForm.controls['Gender'].setValue(result.gender); 
      
      //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      this.updateForm.controls['DateOfBirth'].setValue(this.datePipe.transform(result.dateOfBirth, 'yyyy-MM-dd')); 
      debugger;
     });
  }
  updateCustomer() {
    debugger;
    this.customerService.updateCustomer(this.updateForm.value);
    this.router.navigate(['/customerlist'])
    .then(() => {
      window.location.reload();
    });
  }


  back() {
    this.location.back();
  }
}
