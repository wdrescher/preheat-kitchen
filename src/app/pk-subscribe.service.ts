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

    subscribeToList(email: string, creator: string) {
      const md5 = new Md5(); 
      const url = `https://us17.api.mailchimp.com/3.0/lists/0d23893822/members/` //${md5.appendStr(email).end()}`
      const body = {
        email_address: email, 
        merge_fields: {
          'text': creator
        }, 
        status: "subscribed"
      };
      const headers= {
        authorization: 'e5b9fac034fcf978fabb1d10f565b1c0-us17',
        'content-type': "application/json"
      }
      console.log('called')
      return this.http.post(url, body, {headers: headers})
    }
}
