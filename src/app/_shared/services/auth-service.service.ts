import { Injectable } from '@angular/core';
import { map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { authApiUrl } from 'src/app/_utils/services/apiUrls';
import { CommonService } from 'src/app/_utils/services/commonService';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService extends CommonService {
  getAuthStatus():Observable<any>{
    return this.httpGet(authApiUrl.auth)
  }
}
