
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';
import { TransferProvider } from '../../providers/transfer/transfer';
import { Transfer } from '../../models/transfer';

/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {
  public historicTranfer: Transfer[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public transferService: TransferProvider
  ) {

    this.transferService.getTranferData().subscribe(data => {
      console.log('recover Data');
      this.historicTranfer = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }
  
  newTransferModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    }
    let modal = this.modalCtrl.create('TransferModalPage', {}, myModalOptions);
    modal.present();
  }

  isEmpty() {
    return Object.keys(this.historicTranfer).length === 0;
  }
}
