import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../models/signup.interface';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formValues = {} as SignUp;
  emailPattern=`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`;
  passwordPattern='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6, 20}$';

  constructor(private signupService: SignUpService,
    private router:Router) { }

  ngOnInit(): void {
  }
  checkPassword(){
    return this.formValues.email === this.formValues.confirmPassword? true: false;
  }
  onSubmit(){
    this.signupService.updateRegistry(this.formValues);
    this.router.navigate(['/login']);
  }

}
