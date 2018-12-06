import { Injectable } from '@angular/core';
import { Instrument } from './instrument';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import {Token} from './token'

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private siteUrl = Token.BASEURL +'/instruments';  // URL to web api

  getSites(): Observable<Instrument[]> {
    //fetch Instrument from Agave Chords API

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
        return data.result as Instrument[];
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
