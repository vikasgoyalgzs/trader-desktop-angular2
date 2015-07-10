/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />
import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2/http';

export class Instruments {
    http: Http;

    constructor(@Inject(Http) _http: Http) {
        this.http = _http;
    }

    get() {
        return this.http.get('/instruments')
            .map(res => res.json());
    }
}
