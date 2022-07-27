import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CommonApi {
    private baseUrl: string;
    private http: HttpClient;
    constructor(
        http: HttpClient,
    ) {
        this.baseUrl = environment.endPointApi;
        this.http = http;
    }
    constructParams(url:string, values:any) {
        const params = new URLSearchParams();
        Object.entries(values).map(item => {
          params.append(item[0], `${item[1]}`);
        })
        url = url.concat('?', params.toString());
        return url;
      }

      httpGet(path: string): Observable<any> {
        return this.http.get(this.baseUrl.concat(path))
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPost(path: string, data: any): Observable<any> {
        return this.http.post(this.baseUrl.concat(path), data)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpDelete(path: string): Observable<any> {
        return this.http.delete(this.baseUrl.concat(path))
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPut(path: string, data: any): Observable<any> {
        return this.http.put(this.baseUrl.concat(path), data)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    private handleError(error: Response): any {
        return throwError(_.get(error, 'error') || {});
    }
}