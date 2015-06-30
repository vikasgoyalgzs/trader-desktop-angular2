/**
 * Created by vgoya2 on 6/26/15.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
var angular2_1 = require('jspm_packages/npm/angular2@2.0.0-alpha.28/angular2');
var http_1 = require('jspm_packages/npm/angular2@2.0.0-alpha.28/http');
var Trades = (function () {
    function Trades(_http) {
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
    Trades.prototype.get = function () {
        return this.http('mocks/trades/trades_GET.json')
            .map(function (res) { return res.json(); });
    };
    Trades.prototype.set = function () {
    };
    Trades = __decorate([
        angular2_1.Injectable(),
        __param(0, angular2_1.Inject(http_1.HttpFactory)), 
        __metadata('design:paramtypes', [(typeof IHttp !== 'undefined' && IHttp) || Object])
    ], Trades);
    return Trades;
})();
exports.Trades = Trades;
