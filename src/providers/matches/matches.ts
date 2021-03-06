import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import {BabyfootProvider} from "../babyfoot/babyfoot";
import { Storage } from '@ionic/storage';

/*
  Generated class for the MatchesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchesProvider {

  constructor(public apiProvider:Api, private storage:Storage) {

    console.log('Hello MatchesProvider Provider');

  }

    findTenLastMatch()
    {
        return this.apiProvider.get('match')
    }

    findOneMatch(matchID)
    {
      return this.apiProvider.get('match/'+matchID)
    }

    create(params)
    {
        return this.apiProvider.post('match', params)
    }

    findUserMatch()
    {
      return this.apiProvider.get('user')
    }


}
