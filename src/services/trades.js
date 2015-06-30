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
/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
var angular2_d_1 = require('../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d');
var http_d_1 = require('../../jspm_packages/npm/angular2@2.0.0-alpha.28/http.d');
var Trades = (function () {
    function Trades(_http) {
        this.http = _http;
    }
    Trades.prototype.get = function () {
        return this.http('mocks/trades/trades_GET.json')
            .map(function (res) { return res.json(); });
    };
    Trades = __decorate([
        angular2_d_1.Injectable(),
        __param(0, angular2_d_1.Inject(http_d_1.HttpFactory)), 
        __metadata('design:paramtypes', [(typeof IHttp !== 'undefined' && IHttp) || Object])
    ], Trades);
    return Trades;
})();
exports.Trades = Trades;
