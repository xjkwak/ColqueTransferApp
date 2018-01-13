import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferModalPage } from './transfer-modal';

@NgModule({
  declarations: [
    TransferModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferModalPage),
  ],
})
export class TransferModalPageModule {}
