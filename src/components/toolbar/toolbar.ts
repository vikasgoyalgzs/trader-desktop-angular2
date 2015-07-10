/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View} from 'typings/app.exports';
import {Orders} from '../../services/orders';
import {Instruments} from '../../services/instruments';
import {Modal} from '../../controls/modal/modal';
import {IInstrument} from '../../models/instrument';

@Component({
    selector: 'toolbar',
    appInjector: [Orders, Instruments]
})
@View({
    templateUrl: 'src/components/toolbar/toolbar.html',
    directives: [Modal]
})
export class Toolbar {
    instruments: Array<string>;
    ordersSvc: Orders;
    modalVisible: boolean;
    numberOfTrades: number;

    constructor (ordersSvc: Orders, instrumentsSvc: Instruments) {
        this.ordersSvc = ordersSvc;
        instrumentsSvc.get()
            .subscribe(instruments => this.instruments = instruments.map(i => i.symbol));
    }

    getModalButtons () {
        return [
            {
                id: 0, title: 'Create'
            }, {
                id: 1, title: 'Cancel'
            }
        ];
    }

    getModalCallback () {
        return function (buttonClicked, values) {
            switch (buttonClicked) {
                case 'Create':
                    this.placeTrade(values.numberOfTrades);
                    break;
                default:
                    break;
            }
        }.bind(this);
    }


    placeTrade (numberOfTrades) {
        for (let i = 0; i < parseInt(numberOfTrades); i++) {
            this.ordersSvc.create(this.createRandomTrade())
                .subscribe(res => console.log(res));
        }
        this.modalVisible = false;
    }

    trade(): void {
        this.modalVisible = true;
    }

    deleteAll(): void {
        this.ordersSvc.deleteAll()
            .subscribe(res => console.log(res));
    }

    refresh(): void {
        this.ordersSvc.get()
            .subscribe(res => console.log(res));
    }

    createRandomTrade () {
        let sideOptions = ["Buy", "Sell"];

        return {
            side: sideOptions[Math.floor(Math.random() * sideOptions.length)],
            symbol: this.instruments[Math.floor(Math.random() * this.instruments.length)],
            quantity: parseInt(Math.random() * 4000 + 1),
            limitPrice: parseFloat((Math.random() * 4000 + 1).toFixed(2)),
            traderId: "AM"
        }
    }
}
