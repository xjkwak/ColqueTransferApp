import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileProvider } from '../../providers/profile/profile';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private profile: Profile = new Profile();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileProvider) {

    let suscriptor = this.profileService.getProfile().subscribe(data => {
      this.profile = data;
      console.log("Profile: ", this.profile);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
}
