/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, NgFor} from 'typings/app.exports';
import {ITrade} from '../../models/trade';
import {Trades} from '../../services/trades';

@Component({
    selector: 'grid',
    appInjector: [Trades]
})
@View({
    templateUrl: 'src/components/grid/grid.html',
    directives: [NgFor]
})
export class Grid {
    trades: Array<ITrade>;

    constructor(tradesSvc: Trades) {
        tradesSvc.get()
            .subscribe(trades => this.trades = trades);
    }
}
