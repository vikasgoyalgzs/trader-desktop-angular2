/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, NgFor} from 'typings/app.exports';
import {IOrder} from '../../interfaces/order';
import {OrderRepo} from '../../services/order.repo';
import {DateTimePipe} from '../../pipes/datetime.pipe';

@Component({
    selector: 'grid',
    appInjector: [OrderRepo]
})
@View({
    templateUrl: 'src/components/grid/grid.html',
    styleUrls: ['src/components/grid/grid.css'],
    directives: [NgFor]
})
export class Grid {
    constructor(public orderRepo: OrderRepo) {
    }
}
