/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Injectable, Inject} from 'typings/app.exports';
import {HttpFactory, IHttp} from '../../jspm_packages/npm/angular2@2.0.0-alpha.28/http';

@Injectable()
export class Trades {
    http:IHttp;

    constructor(@Inject(HttpFactory) _http:IHttp) {
        this.http = _http;
    }

    get() {
        return this.http('trader-desktop-angular2/src/mocks/trades/trades_GET.json')
            .map(res => res.json());
    }
}
