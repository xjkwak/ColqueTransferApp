import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

//firebase
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Notification } from '../../models/notification';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {
  notifications: AngularFireList<Notification>;
  notificationsToUser: AngularFireList<Notification>;

  constructor(public http: HttpClient, public transfersDb: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.notifications = transfersDb.list('/notifications/' + afAuth.auth.currentUser.uid);
  }

  sendNotificationData(notification: Notification, uidToUser: String) {

    this.notificationsToUser = this.transfersDb.list('/notifications/' + uidToUser);
    this.notificationsToUser.push(notification);
  }

  getNotificationData(): Observable<Notification[]> {
    return this.notifications.valueChanges();
  }
}
