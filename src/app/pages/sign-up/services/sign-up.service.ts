import { Injectable } from '@angular/core';
import { SignUp } from '../models/signup.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  updateRegistry(data: SignUp){
    if(localStorage.getItem('register')){
      let rigisteredUsers : SignUp[]= JSON.parse(localStorage.getItem('register') || '{}')
      rigisteredUsers.push(data)
      localStorage.setItem('register',JSON.stringify(rigisteredUsers))
    }
    else{
      localStorage.setItem('register',JSON.stringify([data]))
    }
    
  }

}
