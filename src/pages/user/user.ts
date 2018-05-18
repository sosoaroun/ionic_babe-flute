import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  items:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public users:UsersProvider) {
  }

   ionViewDidLoad() {

   this.users.findTenLastUser().subscribe(
       (result:any) => {
         this.items = result
       },
       (error) => {
         console.log(error.message)
       }
   )}



    itemSelected(item:any){
        this.navCtrl.push("UserDetailPage", {currentUser:item})
    }

}
