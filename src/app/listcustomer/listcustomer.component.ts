import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customerservice.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-customer-list',
  templateUrl: './listcustomer.component.html',
  styles: []
})
export class CustomerListComponent implements OnInit {
  empdata = true;
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router, private notifier: NotifierService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully
      this.customers = result; 
     });
    //this.customers = this.customerService.f_data;
  }

  deleteCustomer(customer) {
    if (confirm('Are you sure?')) {
      // const index = this.customers.indexOf(i);
      // this.customers.splice(index, 1);
      debugger;
      this.customerService.deleteCustomer(customer.customerId).subscribe((result) => {
        // This code will be executed when the HTTP call returns successfully
        this.router.navigate(['/customerlist'])
          .then(() => {
            window.location.reload();
          });

       });
    
    }
  }

  editCustomer(editData) {
    debugger;
    this.customerService.editData = editData;
    this.router.navigate(['/update', editData.customerId]);
  }
  
}
