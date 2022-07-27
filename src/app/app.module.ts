import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { LoginModule } from './pages/login/login.module';
import { HeaderModule } from './layout/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_shared/shared.module';
import { AuthGuard } from './_shared/components/auth.gaurd';
import { LoginGuard } from './_shared/components/login.gaurd';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignUpModule,
    LoginModule,
    HeaderModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [AuthGuard , LoginGuard, {provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
