import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import SailsSocket from 'sails-socket';
import {fromPromise} from "rxjs/observable/fromPromise";

/*
  Generated class for the BabyfootProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyfootProvider {

  constructor(public api:Api) {
    console.log('Hello apiProvider Api');
  }

    findAllBaby()
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

        return fromPromise(SailsSocket.get('/babyfoot'));
    }


    update(params, id)
    {
        return this.api.put('babyfoot/' + id, params);
    }


    checkUser()
    {
        //return this.apiProvider.get()
    }



}
