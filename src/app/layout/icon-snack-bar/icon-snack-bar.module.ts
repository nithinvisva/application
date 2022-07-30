import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSnackBarComponent } from './components/icon-snack-bar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/_shared/shared.module';



@NgModule({
  declarations: [IconSnackBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgModule,
    BrowserModule,
    SharedModule
  ],
})
export class IconSnackBarModule { }
