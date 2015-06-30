/**
 * Created by vgoya2 on 5/27/15.
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
/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
var angular2_1 = require('jspm_packages/npm/angular2@2.0.0-alpha.28/angular2');
var router_1 = require('jspm_packages/npm/angular2@2.0.0-alpha.28/router');
var Login = (function () {
    function Login(r) {
        this.router = r;
    }
    Login.prototype.login = function (user) {
        //router.navigate('/Home/' + '0');
        //console.log(userName);
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login',
            appInjector: [router_1.Router]
        }),
        angular2_1.View({
            templateUrl: 'components/login/login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Login);
    return Login;
})();
exports.Login = Login;
