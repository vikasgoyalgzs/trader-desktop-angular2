/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2@2.0.0-alpha.28/http';
import {IOrder} from '../models/order';
import {XHRJsonBackend} from '../utils/xhr_json_backend';

export class Orders {
    http: Http;

    constructor(@Inject(Http) _http) {
        _http._backend = new XHRJsonBackend(window.XMLHttpRequest);
        this.http = _http;
    }

    get() {
        return this.http.get('/orders')
            .map(res => res.json());
    }

    create(newOrder: IOrder) {
        return this.http.post('/orders', JSON.stringify(newOrder))
            .map(res => res.json());
    }

    deleteAll() {
        return this.http.delete('/orders');
    }
}
