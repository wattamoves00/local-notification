import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Xapi } from "../../xmodule/providers/xapi";
import * as xi from "../../xmodule/interfaces/xapi";
import { NotifyEditPage } from "../notify-edit-page/notify-edit-page";


/*
  Generated class for the NotifyListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notify-list-page',
  templateUrl: 'notify-list-page.html'
})
export class NotifyListPage {

//  @ViewChild('mySlider') slider: Slides;

  slug: string;
  page: number = 1;
  posts = [];
  constructor(
      public navCtrl: NavController,
      private navParams: NavParams,
      private x: Xapi
  ) {
 
console.log( 'PostListPage::constructor()', navParams.data);
    this.slug = this.navParams.get( 'slug' );


     this.loadPosts();
  }

 

  loadPosts( finished? ) {
        let arg : xi.PostQuery = xi.postQuery;
        arg.category_name = this.slug;
        arg.paged = this.page ++;
        arg.per_page = 15;
        this.x.get_posts( arg, (res: xi.PostQueryResponse) => {
                if ( res.success ) {
                    if ( res.data && res.data.length ) {
                        this.displayPosts( res.data );
                    }
                    else {
                        console.log('No more posts');
                    }
                }
                else {
                    if ( res.data ) alert( res.data );
                    else alert("Error on post list");
                }
                if ( finished ) finished();
            },
            e => {
                if ( finished ) finished();
            } );
    }

  displayPosts( data ) {
    console.log( 'success', data );
    for ( let post of data ) {
      
      this.posts.push( post );
    }
  }

    doInfinite( infiniteScroll ) {

        this.loadPosts( () => {
            infiniteScroll.complete();
        });

    }

  onclickDelete(ID : any, index: number){
        let arg = {
          post_ID : ID,
          password : 234234
        };
    this.x.delete_post( arg, (res: xi.PostQueryResponse) => {
            if ( res.success ) {
                if ( res.data && res.data.length ) {
                   console.log(res.data);
                   delete this.posts[ID];
                  this.posts.splice(index,1);
                }
                else {
                    console.log('No more posts');
                }
            }
            else {
                if ( res.data ) alert( res.data );
                else alert("Error on post delete");
            }
           
        },
        e => {
          console.log("Error: Couldn't delete post");
        } );

  }



  onClickEdit( post_ID ) {
    this.navCtrl.push( NotifyEditPage, { post_ID: post_ID });
  }
  
  onclickAddPost(){
     this.navCtrl.push(NotifyEditPage);
  }

}

