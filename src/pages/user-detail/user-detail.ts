import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Items} from "../../providers/providers";

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  user:any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user= navParams.get('currentUser')
        console.log(this.user)
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}
