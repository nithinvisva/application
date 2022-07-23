import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/_utils/services/commonService';
import { LogIn, LogInResponse } from '../models/login.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') loginForm: NgForm
  formValues = {} as LogIn;
  emailPattern=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
  inputType: string = 'password';
  visibilityIcon: string = 'visibility';

  constructor(private router:Router,
    private loginService: CommonService ) { 
      this.loginForm={} as NgForm
    }

  ngOnInit(): void {
  }
  changeVisiblity() {
    this.inputType = this.inputType == 'password' ? 'text' : 'password';
    this.visibilityIcon = this.inputType == 'password' ? 'visibility' : 'visibility_off';
  }
  onSubmit(){
    const requestData= {
      email: this.formValues.email,
      password: this.formValues.password
    }
    this.loginService.login(requestData).subscribe({
      next: result => {
        const  data:LogInResponse = result.data
        this.loginService.setAuth(data._id);
        this.router.navigate(['/home']);
      },
      error: error => {
        console.log(error)
      }
    })
  }
  formReset(){
    this.loginForm.resetForm();
    this.formValues = {} as LogIn;
  }
}
