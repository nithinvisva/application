import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from '../models/login.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValues = {} as LogIn;
  emailPattern=`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`;
  passwordPattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$"

  constructor(private router:Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    (this.loginService.login(this.formValues))?this.router.navigate(['/home']): this.router.navigate(['/login']) 
  }
}
