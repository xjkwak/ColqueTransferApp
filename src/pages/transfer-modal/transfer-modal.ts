import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ContactProvider } from '../../providers/contact/contact';
import { TransferProvider } from '../../providers/transfer/transfer';
import { Transfer } from '../../models/transfer';

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
  private data: Transfer;
  private dataTransfer;
  subscription: Subscription;
  
  constructor(public navParams: NavParams,
    private view: ViewController,
    public modalCtrl: ModalController,
    public contactService: ContactProvider,
    public trasnferService: TransferProvider) {
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
    this.data = new Transfer(
      this.dataTransfer.contactName,
      this.dataTransfer.amount,
      this.dataTransfer.originAccount,
      this.dataTransfer.destinyAccount,
      this.dataTransfer.description
    )
    this.trasnferService.sendTranferData(this.data);
    this.closeModal();
  }

  openSelectContact() {
    let modal = this.modalCtrl.create('ContactListPage');
    modal.present();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

