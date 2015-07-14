/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View} from 'typings/app.exports';
import {OrderRepo} from '../../services/order.repo';
import {OrderFactory} from '../../services/order.factory';
import {InstrumentRepo} from '../../services/instrument.repo';
import {Modal} from '../../controls/modal/modal.component';

@Component({
    selector: 'toolbar',
    appInjector: [OrderRepo, OrderFactory, InstrumentRepo]
})
@View({
    templateUrl: 'src/components/toolbar/toolbar.html',
    directives: [Modal]
})
export class Toolbar {
    modalVisible: boolean;
    numberOfTrades: number;

    constructor (public orderRepo: OrderRepo,
                 public orderFactory: OrderFactory,
                 public instrumentRepo: InstrumentRepo) {
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

    //TODO: Vikas - Move instruments to OrderFactory
    placeTrade (numberOfTrades) {
        for (let i = 0; i < parseInt(numberOfTrades); i++) {
            this.orderRepo.insert(this.orderFactory.createRandomTrade(this.instrumentRepo.instruments));
        }
        this.modalVisible = false;
    }

    trade(): void {
        this.modalVisible = true;
    }

    deleteAll(): void {
        this.orderRepo.deleteAll();
    }

    refresh(): void {
        this.orderRepo.get();
    }
}
