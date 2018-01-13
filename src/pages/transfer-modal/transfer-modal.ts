import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the TransferModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-modal',
  templateUrl: 'transfer-modal.html',
})
export class TransferModalPage implements OnDestroy{

  currency :{}[] = [];
  selectedCurrency : number;
  selectedContact: {};
  contactName;
  contactAccount:{}[];
  subscription: Subscription;
  constructor(public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController,
    public contactService: ContactProvider) {
      this.subscription = this.contactService.getValues().subscribe(data => {
        this.contactName = data.name;
        this.selectContact = data;
      });
  }

  ionViewDidLoad() {
  }

  closeModal() {
    this.view.dismiss(); 
  }

  /**Tranfer money */
  transferir() {
    this.closeModal();
  }

  selectContact() {
    console.log("select contact load");
    let modal = this.modalCtrl.create('ContactListPage');
    modal.present();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

