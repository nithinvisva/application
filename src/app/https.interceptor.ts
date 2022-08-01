import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('auth_token')
    if(token){request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'https://crud-angular-ap.herokuapp.com',
        'Access-Control-Allow-Credentials': 'true',
      }
    });
  }else{
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'https://crud-angular-ap.herokuapp.com',
        'Access-Control-Allow-Credentials': 'true',
      }
    });
  }
    return next.handle(request);
  }
}
