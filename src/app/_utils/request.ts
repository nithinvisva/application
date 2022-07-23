import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

export class Request {
    private static token = '';
    private baseUrl: string;
    private http: HttpClient;
    private options: object;
    private optionsHeader: object;
    private optionsHeaderWithCORS: object;

    private static buildRequestOptions(): any {
        const options = {
        };
        return options;
    }

    private static buildRequestWithHeader(): any {
        const headers = Request.buildHeaders();
        const options = {
            headers,
        };
        return options;
    }

    private static buildHeadersWithCORS(): any {
        return new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            reportProgress: 'true',
        });
    }

    private static buildRequestWithCORSHeader(): any {
        const headers = Request.buildHeadersWithCORS();
        const options = {
            headers,
        };
        return options;
    }

    // tslint:disable-next-line:member-ordering
    private static buildHeaders(): any {
        const token = localStorage.getItem('api_token');
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Bearer ${token}`
        });
    }

    // tslint:disable-next-line:member-ordering
    private static getUrl(path: string): string {
        // Get current application url
        return ('/api/').concat(path);
    }

    private handleError(error: Response): any {
        return throwError(_.get(error, 'error') || {});
    }

    constructor(http: HttpClient) {
        this.baseUrl = environment.endPointApi;
        this.http = http;
        this.options = Request.buildRequestOptions();
        this.optionsHeader = Request.buildRequestWithHeader();
        this.optionsHeaderWithCORS = Request.buildRequestWithCORSHeader();
    }

    baseRequestOptions(): object {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:4200',
                'Access-Control-Allow-Credentials': 'true',
            })
        }
    }

    httpGet(path: string): Observable<any> {
        return this.http.get(this.baseUrl.concat(path), this.baseRequestOptions())
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPost(path: string, data: any, formData = false): Observable<any> {
        const header = formData ? this.optionsHeader : this.baseRequestOptions();
        return this.http.post(this.baseUrl.concat(path), data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpDelete(path: string): Observable<any> {
        return this.http.delete(this.baseUrl.concat(path), this.baseRequestOptions())
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpPut(path: string, data: any, formData = false): Observable<any> {
        const header = formData ? this.options : this.baseRequestOptions();
        return this.http.put(this.baseUrl.concat(path), data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    httpS3Put(path: string, data: any): Observable<any> {
        const header = this.optionsHeaderWithCORS;
        return this.http.put(path, data, header)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

}

