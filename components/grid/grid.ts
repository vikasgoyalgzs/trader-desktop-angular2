/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Trade} from 'models/Trade';
import {Component, View} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {tradesSvc} from 'services/trades';

@Component({
  selector: 'grid',
  injectables:[tradesSvc]
})
@View({
  templateUrl: 'components/grid/grid.html'
})
export class Grid {
  trades: Array<Trade>;

  constructor () {
    //this.trades = tradesSvc.get();
  }
}
