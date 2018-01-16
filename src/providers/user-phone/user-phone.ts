import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserPhoneProvider {

  private profile: AngularFireObject<any>;

  constructor(public http: HttpClient,
    public profiledb: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
  }

  getUiidByPhone(phoneId): Observable<any> {
    this.profile = this.profiledb.object('/users_phone/' + phoneId);
    return this.profile.valueChanges();
  }
}
