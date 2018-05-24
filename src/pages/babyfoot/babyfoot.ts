import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BabyfootProvider} from "../../providers/babyfoot/babyfoot";
import SailsSocket from "sails-socket";
import _ from "lodash";
import {ChangeDetectorRef} from "@angular/core";
import {Babyfoot} from "../../models/babyfoot";
import {MatchesProvider} from "../../providers/matches/matches";


/**
 * Generated class for the BabyfootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-babyfoot',
  templateUrl: 'babyfoot.html',
})
export class BabyfootPage {


    items: any;
    babyfoots: Babyfoot[];

    constructor(private ref: ChangeDetectorRef, public navCtrl: NavController, public matchProvider : MatchesProvider, public navParams: NavParams, public babyfoot: BabyfootProvider) {

        SailsSocket.on('babyfoot', (msg) => {
            if(msg.verb != 'addedTo') {
                console.log("coucou");
                console.log(msg);

                let data = msg.data;

                this.babyfoots.filter(function (table, index) {
                    if (table.id == data.id) {
                        _.extend(table, data);
                    }
                });

                //_.extend change l'objet sur le front sans faire le tour des attributs de l'objet

                //refresh the view, extend change l'objet sans le rafraichir
                ref.detectChanges();
            }
        });
    }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad BabyfootPage');

        this.babyfoot.findAllBaby().subscribe(
            (result:any) => {
                //console.log('léreuuure', result.body)
                this.babyfoots = result.body
            },
            (error) => {
                console.log(error.message)
            }
        )}


        goToMatch(item:any){
            this.navCtrl.push("MatchePage", {matchID:item[0].id})

        }

        createMatch(babyfootId)
        {
            this.matchProvider.create({babyfoot: babyfootId}).subscribe((res: any) => {
                console.log('topkek', res.id)
                this.babyfoot.update({Available : false}, babyfootId).subscribe()
                this.navCtrl.push("MatchePage", {matchID: res.id})
            }, err => {
                console.error('ERROR', err);
            });;
        }

}
