import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  contacts:{} = [];

  subject = new Subject();
  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider');
  }

  sendValues(data) {
    console.log(data);
    this.subject.next(data);
  }

  getValues() : Observable<any> {
    return this.subject.asObservable();
  }

  public getContactList() {
    var data = [
      {
        'id': 1,
        'name': 'Ana',
        'phone': '77000001',
        'ci': '5000001'
      },
      {
        'id': 2,
        'name': 'Maria',
        'phone': '77000002',
        'ci': '5000002'
      },
      {
        'id': 3,
        'name': 'Lorena',
        'phone': '77000003',
        'ci': '5000003'
      },
      {
        'id': 4,
        'name': 'Jacinto',
        'phone': '77000004',
        'ci': '5000004'
      }
    ]
    this.contacts = data;
    return this.contacts;
  }
}
