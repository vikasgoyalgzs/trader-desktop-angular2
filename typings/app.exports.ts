/**
 * Created by vgoya2 on 7/4/15.
 */

//Vendor exports
export {Component, View, bootstrap} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
export {EventEmitter} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/src/facade/async';
export {PipeRegistry, Pipe, defaultPipes} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/change_detection';
export {ShadowDomStrategy, NativeShadowDomStrategy} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/render';
export {Router, RouteParams, routerInjectables, RouteConfig, RouterOutlet} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/router';
export {NgFor} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/directives';
export {httpInjectables, BaseRequestOptions, Http} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/http';
export {Injectable, Inject, bind} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/di';
export {XHRConnection} from '../jspm_packages/npm/angular2@2.0.0-alpha.28/src/http/backends/xhr_backend';

//Vendor exports - end

//App exports
/// <reference path="../src/models/instrument.ts" />
/// <reference path="../src/models/order.ts" />
/// <reference path="../src/models/user.ts" />
/// <reference path="../src/pipes/customPipes.ts" />
/// <reference path="../src/pipes/datetime.ts" />
/// <reference path="../src/services/Instruments.ts" />
/// <reference path="../src/services/Users.ts" />
/// <reference path="../src/services/orders.ts" />
/// <reference path="../src/utils/xhr_json_backend.ts" />
/// <reference path="../src/components/app/app.ts" />
/// <reference path="../src/components/grid/grid.ts" />
/// <reference path="../src/components/home/home.ts" />
/// <reference path="../src/components/loggedInUser/loggedInUser.ts" />
/// <reference path="../src/components/login/login.ts" />
/// <reference path="../src/components/toolbar/toolbar.ts" />
/// <reference path="../src/controls/modal/modal.ts" />
//App exports - end
