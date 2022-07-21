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
  emailPattern=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
  inputType: string = 'password';
  visibilityIcon: string = 'visibility';
  confirmInputType: string = 'password';
  confirmVisibilityIcon: string = 'visibility';

  constructor(private signupService: SignUpService,
    private router:Router) { }


  ngOnInit(): void {
  }
  changeVisiblity(from: string) {
    if (from == 'password') {
      this.inputType = (this.inputType == 'password' ? 'text' : 'password');
      this.visibilityIcon = (this.inputType == 'password' ? 'visibility' : 'visibility_off');
    } else {
      this.confirmInputType = (this.confirmInputType == 'password' ? 'text' : 'password');
      this.confirmVisibilityIcon = (this.confirmInputType == 'password' ? 'visibility' : 'visibility_off');
    }
  }
  onSubmit(){
    this.signupService.updateRegistry(this.formValues);
    this.router.navigate(['/login']);
  }

}
