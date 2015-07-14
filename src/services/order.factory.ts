/**
 * Created by vgoya2 on 7/14/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Injectable} from 'typings/app.exports'
import {IOrder} from '../interfaces/order';
import {IInstrument} from '../interfaces/instrument';

@Injectable()
export class OrderFactory {
    createRandomTrade (instruments: Array<string>) {
        let sideOptions = ["Buy", "Sell"];

        return {
            side: sideOptions[Math.floor(Math.random() * sideOptions.length)],
            symbol: instruments[Math.floor(Math.random() * instruments.length)],
            quantity: parseInt(Math.random() * 4000 + 1),
            limitPrice: parseFloat((Math.random() * 4000 + 1).toFixed(2)),
            traderId: "AM"
        }
    }
}
