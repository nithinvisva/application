import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/layout/icon-snack-bar/services/notification.service';
import { CommonService } from 'src/app/_utils/services/commonService';
import { LogIn} from '../models/login.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _=_;
  @ViewChild('form') loginForm: NgForm
  formValues = {} as LogIn;
  emailPattern=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
  inputType: string = 'password';
  visibilityIcon: string = 'visibility';

  constructor(private router:Router,
    private loginService: CommonService,
    private notification:NotificationService ) { 
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
        this.loginService.setAuth(result.data.token);
        this.router.navigate(['/home']);
      },
      error: error => {
        this.notification.openErrorSnackBar(_.get(error,'error','Something Went Wrong In Login'))
      }
    })
  }
  formReset(){
    this.loginForm.resetForm();
    this.formValues = {} as LogIn;
  }
}
