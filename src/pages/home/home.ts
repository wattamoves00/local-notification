import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NotifyEditPage } from '../notify-edit-page/notify-edit-page';
import { Xapi } from '../../xmodule/providers/xapi';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  private x: Xapi
  ) {
     x.serverUrl = "http://work.org/wordpress/index.php";
  }

onclickAddNotify(){
  this.navCtrl.push(NotifyEditPage);
}

}
