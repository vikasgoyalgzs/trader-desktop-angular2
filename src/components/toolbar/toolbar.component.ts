/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View} from 'typings/app.exports';
import {OrderRepo} from '../../services/order.repo';
import {OrderFactory} from '../../services/order.factory';
import {InstrumentRepo} from '../../services/instrument.repo';
import {Modal} from '../modal/modal.component';
import {ViewSettings} from '../../services/viewsettings.service';

@Component({
    selector: 'toolbar',
    appInjector: [OrderRepo, OrderFactory, InstrumentRepo, ViewSettings]
})
@View({
    templateUrl: 'src/components/toolbar/toolbar.html',
    styleUrls: ['src/components/toolbar/toolbar.css'],
    directives: [Modal]
})
export class Toolbar {
    modalVisible: boolean;
    numberOfTrades: number;
    selectedView: string = "table";

    constructor (public orderRepo: OrderRepo,
                 public orderFactory: OrderFactory,
                 public instrumentRepo: InstrumentRepo,
                 public viewSettings: ViewSettings) {
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
            this.modalVisible = false;
        }.bind(this);
    }

    //TODO: Vikas - Move instruments to OrderFactory
    placeTrade (numberOfTrades) {
        for (let i = 0; i < parseInt(numberOfTrades); i++) {
            this.orderRepo.insert(this.orderFactory.createRandomTrade(this.instrumentRepo.instruments));
        }
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

    onViewToggle (view) {
        //TODO: Vikas: Temporary code: Will be replaced with a better communication pattern
        // if it is available in Angular2
        this.viewSettings.settingsObservable.onNext({key: "viewMode", value: view});
    }
}
