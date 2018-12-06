import { Injectable } from '@angular/core';
import { Site } from './site';
//import { Sites } from './sites';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import {Token} from './token'
@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private siteUrl = Token.BASEURL +'/sites';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService)  {
  }

  getSites(): Observable<Site[]> {
    //fetch Sites from Agave Chords API
    //return this.http.get<Site[]>(this.siteUrl)

    let head = new HttpHeaders()
    .set("Authorization", "Bearer " + Token.TOKEN)
    .set("Content-Type", "application/x-www-form-urlencoded");
  //  .set('Access-Control-Allow-Origin','*');
    let options = {
      headers: head
    };

    let response = this.http.get<ResponseResults>(this.siteUrl, options)
    .pipe(
      retry(3),
      map((data) => {
        return data.result as Site[];
      }),
      catchError((e) => {
        return Observable.throw(new Error(e.message));
      })
    );
    return response;
    interface ResponseResults {
      result: any
    }
  }
}
