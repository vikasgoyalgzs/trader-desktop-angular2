/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />
import {Inject, EventEmitter} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2/http';
import {IOrder} from '../interfaces/order';
import {XHRJsonBackend} from '../utils/xhr_json_backend';
import {IRepository} from '../interfaces/repository';

let instance = null;
export class OrderRepo implements IRepository<IOrder>{
    http: Http;
    orders: EventEmitter;

    constructor(@Inject(Http) _http) {
        if (!instance) {
            instance = this;
            _http._backend = new XHRJsonBackend(window.XMLHttpRequest);
            this.http = _http;
            this.orders = new EventEmitter();
            this.get();
        }
        return instance;
    }

    insert (order: IOrder) {
        return this.http.post('/orders', JSON.stringify(order))
            .subscribe(r => this.get());
    }

    remove (id: string) {
        console.log('Method not implemented');
    }

    find (id: string) {
        console.log('Method not implemented');
    }

    get() {
        return this.http.get('/orders')
            .map(res => res.json())
            .subscribe(o => this.orders.next(o));
    }

    deleteAll() {
        return this.http.delete('/orders')
            .subscribe(r => this.get());
    }
}

