/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from 'typings/app.exports';

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'src/components/Toolbar/toolbar.html'
})
export class Toolbar {
  trade (): void {
    console.log('trade called');
  }

  deleteAll (): void {
    console.log('deleteAllCalled');
  }

  refresh (): void {
    console.log('refresh called');
  }
}
