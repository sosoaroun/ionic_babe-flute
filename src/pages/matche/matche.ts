import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatchesProvider} from "../../providers/matches/matches";

/**
 * Generated class for the MatchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matche',
  templateUrl: 'matche.html',
})
export class MatchePage {

  match:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public matches:MatchesProvider) {
  }

    matchSelected(match:any){
     //   this.navCtrl.push("MatchDetailPage", {currentMatch:item})
    }

    ionViewDidLoad() {

    // this.matches.findTenLastMatch().subscribe(
    //     (result:any) => {
    //         this.match = result
    //     },
    //     (error) => {
    //       console.log(error.message)
    //     }
    //     )

        this.matches.findOneMatch(this.navParams.get("matchID")).subscribe(
            (result:any) => {
                this.match = result
            }
        )
    }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MatchePage');
  // }

}
