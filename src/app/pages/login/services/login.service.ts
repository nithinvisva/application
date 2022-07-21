import { Injectable } from '@angular/core';
import { SignUp } from '../../sign-up/models/signup.interface';
import { LogIn } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(data: LogIn):boolean{
    if(localStorage.getItem('register')){
      const users: SignUp[] = JSON.parse(localStorage.getItem('register') || '{}');
      users.map((item)=>{
        if(item.email === data.email && item.password === data.password){
          localStorage.setItem('auth',data.email)
          return (localStorage.getItem('auth') == data.email)? true : false
        }
        return (localStorage.getItem('auth')== data.email)? true : false
      })
    }
    return (localStorage.getItem('auth')== data.email)? true : false
  }
}
