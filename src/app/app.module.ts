import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotifyEditPage } from '../pages/notify-edit-page/notify-edit-page';
import { NotifyListPage } from '../pages/notify-list-page/notify-list-page';
import { HomePage } from '../pages/home/home';

import { XModule } from '../xmodule/modules/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotifyEditPage,
    NotifyListPage
  ],
  imports: [
    XModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotifyEditPage,
    NotifyListPage
  ],
  providers: []
})
export class AppModule {}
