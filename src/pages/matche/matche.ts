import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatchesProvider} from "../../providers/matches/matches";
import SailsSocket from "sails-socket";
import _ from 'lodash'
import {ChangeDetectorRef} from "@angular/core";

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

  match:any = {};

  constructor(private ref: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, public matches:MatchesProvider) {
    SailsSocket.on('matche', (msg) => {
      if(msg.verb != 'addedTo') {
          console.log("coucou");
          console.log(msg);

          let data = msg.data;

          // this.match.filter(function (table, index) {
          //     if (table.id == data.id) {
          //         _.extend(table, data);
          //     }
          // });

          // //_.extend change l'objet sur le front sans faire le tour des attributs de l'objet

          // //refresh the view, extend change l'objet sans le rafraichir
          // ref.detectChanges();
      }
  });
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
                console.log(this.match)
            }
        )
    }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MatchePage');
  // }

}
