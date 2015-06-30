/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';

@Component({
  selector: 'loggedin-user'
})
@View({
  templateUrl: 'src/components/loggedInUser/loggedInUser.html'
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
