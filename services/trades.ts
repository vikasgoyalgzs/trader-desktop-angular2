/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Injectable, Inject} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {HttpFactory, IHttp} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/http';

@Injectable()
export class Trades {
  http: IHttp;

  constructor (@Inject(HttpFactory) _http: IHttp) {
    this.http = _http;


    //this.trades = [{
    //  "id": 0,
    //  "creationTime": "2014-12-22T02:21:58 +05:00",
    //  "side": "Buy",
    //  "symbol": "ORCL",
    //  "quantity": 3907,
    //  "placed": 2640,
    //  "executed": 744,
    //  "limitPrice": 2607,
    //  "priority": 72,
    //  "status": "Executed",
    //  "trader": "ipsum"
    //},
    //  {
    //    "id": 1,
    //    "creationTime": "2015-03-06T23:59:56 +05:00",
    //    "side": "Sell",
    //    "symbol": "AAPL",
    //    "quantity": 72,
    //    "placed": 2658,
    //    "executed": 635,
    //    "limitPrice": 3048,
    //    "priority": 27,
    //    "status": "Executed",
    //    "trader": "et"
    //  },
    //  {
    //    "id": 2,
    //    "creationTime": "2014-07-17T20:33:55 +04:00",
    //    "side": "Buy",
    //    "symbol": "AAPL",
    //    "quantity": 1602,
    //    "placed": 808,
    //    "executed": 373,
    //    "limitPrice": 1465,
    //    "priority": 19,
    //    "status": "New",
    //    "trader": "incididunt"
    //  }];
    ////http.get('mocks/trades/trades_GET.json').subscribe(res => this.trades = res.text);

  }
  get () {
    return this.http('mocks/trades/trades_GET.json')
      .map(res => res.json());
  }
  set () {

  }
}
