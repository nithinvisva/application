import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  getAuthStatus():boolean{
    return (localStorage.getItem('auth'))? true : false
  }
}
