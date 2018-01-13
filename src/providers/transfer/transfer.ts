import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {
  subject = new Subject();
  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  sendTranferData(data) {
    this.subject.next(data);
  }

  getTranferData() : Observable<any> {
    return this.subject.asObservable();
  }

}
