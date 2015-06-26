/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="./../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'loggedin-user'
})
@View({
  templateUrl: 'components/loggedInUser/loggedInUser.html',
  properties: []
})
export class LoggedinUser {
  userFullName: string;

  constructor () {
    this.userFullName = 'Vikas Goyal';
  }

  signOut () {
    this.userFullName = "Sign Out";
  }
}
