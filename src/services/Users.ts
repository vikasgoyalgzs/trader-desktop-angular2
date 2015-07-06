/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2@2.0.0-alpha.28/http';

export class Users {
    http: Http;

    constructor(@Inject(Http) _http) {
        this.http = _http;
    }

    get() {
        return this.http.get('/users')
            .map(res => res.json());
    }
}
