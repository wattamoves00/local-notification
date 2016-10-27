import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PostEditService } from '../../xmodule/providers/post-edit-service';
import {IPost} from '../../interfaces/IPost';
import{ NotifyListPage } from '../notify-list-page/notify-list-page';

/*
  Generated class for the NotifyEditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notify-edit-page',
  templateUrl: 'notify-edit-page.html'
})
export class NotifyEditPage {
  ID: number;
  title : "";
  message: string;
  date: string;
  post_ID: number;
 

  constructor(public navCtrl: NavController,
     private postEditService: PostEditService,
     private navParams: NavParams,
     private events: Events
     ) {
   // events.subscribe('file-upload-success', x => this.onSuccessFileUpload(x[0]));
    this.post_ID = navParams.get('post_ID');
      if ( this.post_ID ) {
        postEditService.load( this.post_ID, p => {
          console.log(p);
          this.title = p.post_title;
          this.message = p.meta.post_message;     
          this.date = p.meta.date;  
       //   if ( p.images ) {
         //   this.urlPhoto = p.images[Object.keys( p.images ).pop()];
        //  }
        });
      }
  }


  onClickPost() {
   
   
    let post = {
      ID: this.post_ID,   
      category: 'notification', 
      post_title : this.title,
      message: this.message,
      date: this.date,
      password : 234234
    };

   
    this.postEditService.submit( post, res => {
      console.log("onClickPost::callback(), ", res );

      //when success redirect to PostListPage
      this.navCtrl.setRoot(NotifyListPage);
    }, err => {
  
      console.log("err");
    });
  }

 // onChangeFileBrowser( $event ) {
   //   this.postEditService.upload( $event.target.files );
 // }

  // Displays image.
  // This method is called on file-upload-success event.
 // private onSuccessFileUpload( file ) {
 //   console.log(file);
  //  this.photoId = file.id;
  //  this.urlPhoto = file.url ;
 // }

  onClickViewNotify(){
     this.navCtrl.push(NotifyListPage);
  }
}


  