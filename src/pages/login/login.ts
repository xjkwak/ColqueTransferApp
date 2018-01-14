import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
  }

  login(){
    console.log(this.user);
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(result => {
      this.navCtrl.push('SyncContactPage');
    }).catch(err => {
      console.log(err.message);
    });

  }
}
