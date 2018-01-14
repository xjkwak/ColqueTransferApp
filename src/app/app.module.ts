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
import { ProfileProvider } from '../providers/profile/profile';


 // Initialize Firebase
 export const configFirebase = {
  apiKey: "AIzaSyBb624vSFfwXZyDkTIA_Lk8TLYsZOT3w4Y",
    authDomain: "chationicv3.firebaseapp.com",
    databaseURL: "https://chationicv3.firebaseio.com",
    projectId: "chationicv3",
    storageBucket: "chationicv3.appspot.com",
    messagingSenderId: "10085583664"
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
    AngularFireAuth,
    ProfileProvider
  ]
})
export class AppModule { }
