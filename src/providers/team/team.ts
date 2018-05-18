import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import {fromPromise} from "rxjs/observable/fromPromise";
import SailsSocket from 'sails-socket';
import { Storage } from '@ionic/storage';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

    constructor(public apiProvider:Api, private storage: Storage) {
        console.log('Hello apiProvider Api');
    }

    findTeams()
    {
        //return this.apiProvider.get('babyfoot')


        // SailsSocket.get('/babyfoot').then(function(jwr){
        //   console.log(jwr.body)
        // }).catch(function(jwr){
        //   console.log(jwr.error);
        // })
        // SailsSocket.on('babyfoot', function(msg){
        //   console.log(msg)
        // })

        return this.apiProvider.get('team');
    }

    myteam(teamId)
    {
        return this.apiProvider.get('team/'+ teamId)

    }

    checkUser()
    {
        //return this.apiProvider.get()
    }


}
