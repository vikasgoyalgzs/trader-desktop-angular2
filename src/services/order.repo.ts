/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />
import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2/http';
import {IOrder} from '../interfaces/order';
import {XHRJsonBackend} from '../utils/xhr_json_backend';
import {IRepository} from '../interfaces/repository';

export class OrderRepo implements IRepository<IOrder>{
    http: Http;
    orders: Array<IOrder>;

    constructor(@Inject(Http) _http) {
        _http._backend = new XHRJsonBackend(window.XMLHttpRequest);
        this.http = _http;
        this.get()
            .subscribe(orders => this.orders = orders);
    }

    insert (order: IOrder) {
        return this.http.post('/orders', JSON.stringify(order))
            .map(res => res.json());
    }

    remove (id: string) {
        console.log('Method not implemented');
    }

    find (id: string) {
        console.log('Method not implemented');
    }

    get() {
        return this.http.get('/orders')
            .map(res => res.json());
    }

    deleteAll() {
        return this.http.delete('/orders');
    }
}


