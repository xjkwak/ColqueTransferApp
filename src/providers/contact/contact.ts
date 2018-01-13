import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  contacts: {} = [];

  subject = new Subject();
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ContactProvider Provider');
  }

  sendValues(data) {
    console.log(data);
    this.subject.next(data);
  }

  getValues(): Observable<any> {
    return this.subject.asObservable();
  }

  public getContactList() {    
    return this.storage.get('contacts');
  }
}
