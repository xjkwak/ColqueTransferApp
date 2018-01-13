import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the SyncContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sync-contact',
  templateUrl: 'sync-contact.html',
})
export class SyncContactPage {

  private contactList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contacts: Contacts) {

    this.contacts.find(['*'], { filter: "", multiple: true })
      .then(data => {
        this.contactList = data;
        console.log(this.contactList);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncContactPage');
  }

}
