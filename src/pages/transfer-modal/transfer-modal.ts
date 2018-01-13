import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ContactProvider } from '../../providers/contact/contact';
import { TransferProvider } from '../../providers/transfer/transfer';

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
  public selectedContact: {};
  private dataTransfer;
  subscription: Subscription;
  
  constructor(public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController,
    public contactService: ContactProvider, public trasnferService: TransferProvider) {
      this.dataTransfer = {
        'contactName':'',
        'amount':'',
        'originAccount':'',
        'destinyAccount': '',
        'description': ''
      }
      this.subscription = this.contactService.getValues().subscribe(data => {
        this.dataTransfer.contactName = data.name;
        this.dataTransfer.destinyAccount = data.phone;
        this.selectedContact = data;
      });
  }

  ionViewDidLoad() {
  }

  closeModal() {
    this.view.dismiss(); 
  }

  /**Tranfer money */
  transferir() {
    console.log(this.dataTransfer);
    this.trasnferService.sendTranferData(this.dataTransfer);
    this.closeModal();
  }

  openSelectContact() {
    console.log("select contact load");
    let modal = this.modalCtrl.create('ContactListPage');
    modal.present();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

