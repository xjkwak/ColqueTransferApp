import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

//firebase
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Transfer } from '../../models/transfer';
/*
  Generated class for the TransferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransferProvider {
  subject = new Subject();
  transfers: AngularFireList<Transfer>
  constructor(public http: HttpClient, public transfersDb: AngularFireDatabase) {
    this.transfers = transfersDb.list('/transfers');
  }

  sendTranferData(transfer: Transfer) {
    this.transfers.push(transfer);
  }

  getTranferData() : Observable<Transfer[]> {
    return this.transfers.valueChanges();
  }

}
