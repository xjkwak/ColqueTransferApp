import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Contacts } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { ContactProvider } from '../providers/contact/contact';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TransferProvider } from '../providers/transfer/transfer';

//Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';


 // Initialize Firebase
 export const configFirebase = {
  apiKey: "AIzaSyChf-IjlFj_qyIyWtlsOihlpq7JJQ2bpjA",
  authDomain: "chationicapp-4dfe4.firebaseapp.com",
  databaseURL: "https://chationicapp-4dfe4.firebaseio.com",
  projectId: "chationicapp-4dfe4",
  storageBucket: "chationicapp-4dfe4.appspot.com",
  messagingSenderId: "369841428023"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    TransferProvider,
    HttpClient,
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class AppModule { }
