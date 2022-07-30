import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/layout/icon-snack-bar/services/notification.service';
import { CommonService } from 'src/app/_utils/services/commonService';
import { SignUp } from '../models/signup.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  _=_;
  formValues = {} as SignUp;
  emailPattern=new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
  inputType: string = 'password';
  visibilityIcon: string = 'visibility';
  confirmInputType: string = 'password';
  confirmVisibilityIcon: string = 'visibility';

  constructor(private signupService: CommonService,
    private router:Router,
    private notification:NotificationService) { }


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
    const data = {
      email: this.formValues.email,
      password: this.formValues.confirmPassword
    }
    this.signupService.updateRegistry(data).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: error => {
        this.notification.openErrorSnackBar(_.get(error,'error.message','Something Went Wrong In SignUp'))
      }
    })
  }
}
