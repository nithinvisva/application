import { Injectable } from '@angular/core';
import { CommonApi } from '../commonApi';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { LogIn } from 'src/app/pages/login/models/login.interface';
import { authApiUrl } from './apiUrls';


@Injectable({
  providedIn: 'root',
})
export class CommonService extends CommonApi {
    login(loginData:LogIn): Observable<any>{
        return this.httpPost(authApiUrl.login, loginData);
    }

    updateRegistry(loginData: LogIn):Observable<any>{
        return this.httpPost(authApiUrl.signUp, loginData)
    }

    setAuth(token: string){
        localStorage.setItem('auth_token',token);
    }
    removeAuth(){
        localStorage.removeItem('auth_token');
    }
}