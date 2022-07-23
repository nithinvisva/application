import { Injectable } from '@angular/core';
import { Request } from './request';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})

export class CommonApi extends Request {
    constructor(
        private httpClient: HttpClient,
    ) {
        super(httpClient);
    }
    constructParams(url:string, values:any) {
        const params = new URLSearchParams();
        Object.entries(values).map(item => {
          params.append(item[0], `${item[1]}`);
        })
        url = url.concat('?', params.toString());
        return url;
      }
}