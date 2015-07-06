/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from 'typings/app.exports';
import {Orders} from '../../services/orders';

@Component({
    selector: 'toolbar',
    appInjector: [Orders]
})
@View({
    templateUrl: 'src/components/Toolbar/toolbar.html'
})
export class Toolbar {
    ordersSvc: Orders;

    constructor (ordersSvc: Orders) {
        this.ordersSvc = ordersSvc;
    }

    trade(): void {
        this.ordersSvc.create()
            .subscribe(res => console.log(res));
    }

    deleteAll(): void {
        this.ordersSvc.deleteAll()
            .subscribe(res => console.log(res));
    }

    refresh(): void {
        this.ordersSvc.get()
            .subscribe(res => console.log(res));
    }
}
