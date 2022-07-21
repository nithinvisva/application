import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIn } from '../models/login.interface';
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
    private loginService: LoginService) { 
      this.loginForm={} as NgForm
    }

  ngOnInit(): void {
  }
  changeVisiblity() {
    this.inputType = this.inputType == 'password' ? 'text' : 'password';
    this.visibilityIcon = this.inputType == 'password' ? 'visibility' : 'visibility_off';
  }
  onSubmit(){
    (this.loginService.login(this.formValues))?this.router.navigate(['/home']): this.formReset() 
  }
  formReset(){
    this.loginForm.resetForm();
    this.formValues = {} as LogIn;
  }
}
