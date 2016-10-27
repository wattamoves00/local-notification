import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LocalNotification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-notification',
  templateUrl: 'local-notification.html'
})
export class LocalNotification {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LocalNotification Page');
  }

}
