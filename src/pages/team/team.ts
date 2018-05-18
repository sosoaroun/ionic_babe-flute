import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {TeamProvider} from "../../providers/team/team";
import {Babyfoot} from "../../models/babyfoot";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

    items: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public teams:TeamProvider,private storage: Storage) {
    }

    ionViewDidLoad() {

        this.storage.get('user').then((user) => {
            this.teams.myteam(user.team).subscribe(
                (result: any) => {
                    console.log(result);
                    this.items = result
                },
                (error) => {
                    console.log(error.message)
                }
            )
        })
    }
    // itemSelected(item:any){
    //     this.navCtrl.push("UserDetailPage", {currentUser:item})
    // }


    //findMyTeam()


}
