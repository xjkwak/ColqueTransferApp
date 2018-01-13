import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyncContactPage } from './sync-contact';

@NgModule({
  declarations: [
    SyncContactPage,
  ],
  imports: [
    IonicPageModule.forChild(SyncContactPage),
  ],
})
export class SyncContactPageModule {}
