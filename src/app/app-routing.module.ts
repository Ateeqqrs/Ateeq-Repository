import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './listcustomer/listcustomer.component';
import { EmpFormComponent } from './addcustomer/addcustomer.component';
import { UpdateCustomerComponent } from './updatecustomer/updatecustomer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'customerlist', component: CustomerListComponent,canActivate:[AuthGuard] },
  { path: 'update/:id', component: UpdateCustomerComponent,canActivate:[AuthGuard] },
  { path: 'emp-form', component: EmpFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
