import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  ApiURL = 'http://localhost:54277/api';
  editData = {};

  f_data = [{
    'id': 1,
    'emp_name': 'Leanne Graham',
    'emp_join_date': '2016-08-12',
    'emp_adr': 'Howemouth',
    'emp_experience': '2 Year',
    'emp_salary': 82800,
    'emp_age': 28,
    'emp_email': 'julianneonner@kory.org',
    'emp_dob': '1980-02-12'
  },
  {
    'id': 2,
    'emp_name': 'Clementine Bauch',
    'emp_join_date': '2016-03-12',
    'emp_adr': 'South Christy',
    'emp_experience': '6 Year',
    'emp_salary': 32500,
    'emp_age': 29,
    'emp_email': 'reypadberg@karina.biz',
    'emp_dob': '1980-10-12'
  },
  {
    'id': 3,
    'emp_name': 'Leanne Graham',
    'emp_join_date': '2011-08-12',
    'emp_adr': 'Roscoeview',
    'emp_experience': '8 Year',
    'emp_salary': 42555,
    'emp_age': 28,
    'emp_email': 'chaimermott@dana.io',
    'emp_dob': '1980-08-12'
  },
  {
    'id': 4,
    'emp_name': 'clementinaduBuque',
    'emp_join_date': '2017-08-11',
    'emp_adr': 'South Elvis',
    'emp_experience': '2 Year',
    'emp_salary': 82800,
    'emp_age': 58,
    'emp_email': 'julianneoconner@kory.org',
    'emp_dob': '1980-02-12'
  },
  {
    'id': 5,
    'emp_name': 'Bauch',
    'emp_join_date': '2015-05-12',
    'emp_adr': 'McKenziehaven',
    'emp_experience': '4 Year',
    'emp_salary': 32500,
    'emp_age': 39,
    'emp_email': 'reypadberg@karina.biz',
    'emp_dob': '1980-10-12'
  },
  {
    'id': 6,
    'emp_name': 'Graham',
    'emp_join_date': '2018-08-12',
    'emp_adr': 'Wisokyburgh',
    'emp_experience': '6 Year',
    'emp_salary': 42555,
    'emp_age': 48,
    'emp_email': 'chaimmcdermott@dana.io',
    'emp_dob': '1980-08-12'
  }];

  addCustomer(data: any) {
    //this.f_data.push(data);
    debugger;
    return this.http.post(this.ApiURL + '/Customer/AddCustomer', data).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
     });


  }
  deleteCustomer(customerId: number) {
    debugger;
    return this.http.delete<Customer[]>(this.ApiURL + '/Customer/DeleteCustomer?customerId=' + customerId);
  }
  getCustomers() {
    return this.http.get<Customer[]>(this.ApiURL + '/Customer/GetCustomers');
  }
  getCustomerByID(customerId: number) {
    return this.http.get<Customer>(this.ApiURL + '/Customer/GetCustomerById?customerId=' + customerId);
  }
  IsCustomerNumberAlreadyExist(customerNumber: number) {
    debugger;
    return this.http.get<boolean>(this.ApiURL + '/Customer/IsCustomerNumberAlreadyExist?customerNumber=' + customerNumber);
  }
  updateCustomer(customer: Customer) {
    debugger;
    return this.http.put(this.ApiURL + '/Customer/UpdateCustomer' ,  customer).subscribe((result) => {
      // This code will be executed when the HTTP call returns successfully 
     });
;
  }
}
