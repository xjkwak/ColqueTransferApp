import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
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

}
