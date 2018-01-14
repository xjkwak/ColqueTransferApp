import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  private profile: AngularFireObject<Profile>;

  constructor(public http: HttpClient,
    public profiledb: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.profile = profiledb.object('/profile/' + afAuth.auth.currentUser.uid);
  }

  getProfile(): Observable<Profile> {
    return this.profile.valueChanges();
  }
}
