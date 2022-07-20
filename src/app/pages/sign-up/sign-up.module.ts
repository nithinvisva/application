import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
