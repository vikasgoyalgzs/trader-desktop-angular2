/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d';

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'components/Toolbar/toolbar.html'
})
export class Toolbar {
  constructor () {

  }

  trade () {
    console.log('trade called');
  }

  deleteAll () {
    console.log('deleteAllCalled');
  }

  refresh () {
    console.log('refresh called');
  }
}
