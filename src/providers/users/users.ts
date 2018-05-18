import { Injectable } from '@angular/core';
import {Api} from "../api/api";

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public apiProvider:Api)
  {
    console.log('Hello apiProvider Api');
  }

  findTenLastUser()
  {
    return this.apiProvider.get('user')
  }

  checkUser()
  {
    //return this.apiProvider.get()
  }

  //get



}
