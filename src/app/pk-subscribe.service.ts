import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class PkSubscribeService {
        constructor(
      private http: HttpClient
    ) {}

    mailChimpEndpoint = 'https://yahoo.us17.list-manage.com/subscribe/post-json?u=c486f4ea93c2d387ce900d9a7&id=0d23893822&';

    subscribeToList(email: string, creator: string) {
      const md5 = new Md5(); 
      const httpParams = new HttpParams()
        .set('b_c486f4ea93c2d387ce900d9a7_0d23893822', '')
        .set('EMAIL', email)
        .set('MMERGE1', creator)
        .set('subscribe', 'Subscribe')
        .set('_', '1598983545625'); 
      
      const url = this.mailChimpEndpoint + httpParams.toString(); 
      return this.http.jsonp<any>(url, 'c');
    }
}