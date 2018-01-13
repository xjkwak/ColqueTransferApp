import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { ContactPhone } from '../../models/contact-phone';

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

  private contactList: ContactPhone[]=[];
  private loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contacts: Contacts,
    private storage: Storage,
    public loadingCtrl: LoadingController) {

    this.loader = this.loadingCtrl.create({
      content: "Espere mientras sincronizamos sus contactos."
    });
    this.loader.present();

    this.contacts.find(['*'], { filter: "", multiple: true })
      .then(data => {       

        for (let item of data) {
          let contact = new ContactPhone(item.displayName,
            item.phoneNumbers[0].value);
          this.contactList.push(contact);
        }

        console.log(this.contactList);
        storage.set('contacts', this.contactList);
        this.loader.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncContactPage');
  }

}
