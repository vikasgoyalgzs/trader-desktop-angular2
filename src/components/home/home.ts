/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d';
import {LoggedinUser} from '../loggedInUser/loggedInUser';
import {Toolbar} from '../toolbar/toolbar';
import {Grid} from '../grid/grid';


@Component({
  selector: 'home'
})
@View ({
  templateUrl: 'components/home/home.html',
  directives: [LoggedinUser, Toolbar, Grid]
})
export class Home {
  constructor () {

  }
}
