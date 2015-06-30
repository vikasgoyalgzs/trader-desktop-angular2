/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Trade} from 'models/Trade';
import {Component, View} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {Injector, Inject} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/di';
import {NgFor} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/directives';
import {Trades} from 'services/trades';

@Component({
  selector: 'grid',
  appInjector: [Trades]
})
@View({
  templateUrl: 'components/grid/grid.html',
  directives: [NgFor]
})
export class Grid {
  trades: Array<Trade>;

  constructor (tradesSvc: Trades) {
    tradesSvc.get()
      .subscribe(trades => this.trades = trades);
  }
}
