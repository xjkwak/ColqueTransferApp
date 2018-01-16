import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

//firebase
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Transfer } from '../../models/transfer';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationProvider } from '../notification/notification';
import { Notification } from '../../models/notification';
import { ProfileProvider } from '../profile/profile';
import { Profile } from '../../models/profile';
import { UserPhoneProvider } from '../user-phone/user-phone';

/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {
  subject = new Subject();
  transfers: AngularFireList<Transfer>;
  private profile: Profile = new Profile();
  private notificationData: Notification;
  private uuidTo : String;
  constructor(public http: HttpClient, public transfersDb: AngularFireDatabase,
    public afAuth: AngularFireAuth, public notificationService: NotificationProvider,
    public profileService: ProfileProvider, public userPhoneService : UserPhoneProvider) {
    this.transfers = transfersDb.list('/transfers/' + afAuth.auth.currentUser.uid);
  }

  sendTranferData(transfer: Transfer) {
    this.transfers.push(transfer).then(()=>{

      let suscriptor = this.profileService.getProfile().subscribe(data => {
        this.profile = data;
      });
  
      let userSuscriptor = this.userPhoneService.getUiidByPhone(transfer.destinyAccount).subscribe(data => {
        this.uuidTo = data;
      });

      this.notificationData = new Notification(this.profile.name, transfer.amount, transfer.description);
      this.notificationService.sendNotificationData(this.notificationData, this.uuidTo);
    });
  }

  getTranferData(): Observable<Transfer[]> {
    return this.transfers.valueChanges();
  }
}
