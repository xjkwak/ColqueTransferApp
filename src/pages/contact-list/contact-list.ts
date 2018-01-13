import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  contacts:{} = [];
  contactSelected;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public contactService: ContactProvider,
    private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactListPage');
    this.contacts = this.contactService.getContactList();
    
  }

  closeModal() {
    this.view.dismiss(); 
  }

  selectedContact(index) {
    this.contactSelected = this.contacts[index];
    this.contactService.sendValues(this.contactSelected);
    this.closeModal();
  }

}
