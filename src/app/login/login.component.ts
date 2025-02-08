//import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./styles.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private loginService: LoginService, 
    private router: Router
  ) 
  {
    this.myForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required]]
    });
  }

  

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/customerlist');
  }

  onSubmit() {
    this.loginService.login(this.myForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        //this.changeData();//means user has logged in
        this.router.navigateByUrl('/customerlist');
      },
      err => {
        if (err.status == 400)
          //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        alert('Incorrect username or password.');
        else
          console.log(err);
      }
    );
  }
}
