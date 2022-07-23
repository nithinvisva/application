import { Injectable } from '@angular/core';
import { CommonApi } from '../commonApi';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { LogIn } from 'src/app/pages/login/models/login.interface';


@Injectable({
  providedIn: 'root',
})
export class CommonService extends CommonApi {
    login(loginData:LogIn): Observable<any>{
        const url='login';
        return this.httpPost(url, loginData);
    }

    setAuth(id: string){
        localStorage.setItem('userId',id)
    }
}