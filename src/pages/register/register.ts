import { User } from '../../models/User';
import { Profile } from '../../models/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public user: User = new User();
  public profile: Profile = new Profile();
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afAuth: AngularFireAuth, 
  public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
  }

  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then(result => {
    
      this.afAuth.authState.subscribe(auth => {
        this.afDatabase.list('/profile/' + auth.uid).push(this.profile).then(()=> this.navCtrl.push('SyncContactPage'));
      });

    }).catch(err => {
    });

    
  }
}