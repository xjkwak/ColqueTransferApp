import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationProvider } from '../../providers/notification/notification';
import { Notification } from '../../models/notification';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public notifications: Notification[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public notificationService: NotificationProvider) {
    this.notificationService.getNotificationData().subscribe(data => {
      this.notifications = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
