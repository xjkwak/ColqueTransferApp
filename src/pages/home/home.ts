import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public afAuth: AngularFireAuth) {
  }
  startTransfer() {
    this.navCtrl.push('TransferPage');
  }

  logout() {
    this.afAuth.auth.signOut();
    this.navCtrl.popToRoot();
  }
}
