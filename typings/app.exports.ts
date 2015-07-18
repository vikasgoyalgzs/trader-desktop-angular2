/**
 * Created by vgoya2 on 7/4/15.
 */

//Vendor exports
export {Component, View, Directive, bootstrap, CSSClass, ViewContainerRef, ProtoViewRef} from '../jspm_packages/npm/angular2/angular2';
export {EventEmitter, ObservableWrapper} from '../jspm_packages/npm/angular2/src/facade/async';
export {PipeRegistry, Pipe, defaultPipes} from '../jspm_packages/npm/angular2/change_detection';
export {ShadowDomStrategy, NativeShadowDomStrategy} from '../jspm_packages/npm/angular2/render';
export {Router, RouteParams, routerInjectables, RouteConfig, RouterOutlet} from 'jspm_packages/npm/angular2/router';
export {NgFor} from '../jspm_packages/npm/angular2/directives';
export {httpInjectables, BaseRequestOptions, Http} from '../jspm_packages/npm/angular2/http';
export {Injectable, Inject, bind} from '../jspm_packages/npm/angular2/di';
export {XHRConnection} from '../jspm_packages/npm/angular2/src/http/backends/xhr_backend';

//Vendor exports - end

//App exports
/// <reference path="../src/interfaces/instrument.ts" />
/// <reference path="../src/interfaces/order.ts" />
/// <reference path="../src/interfaces/repository.ts" />
/// <reference path="../src/interfaces/user.ts" />
/// <reference path="../src/pipes/customPipes.ts" />
/// <reference path="../src/pipes/datetime.pipe.ts" />
/// <reference path="../src/services/Instrument.repo.ts" />
/// <reference path="../src/services/order.factory.ts" />
/// <reference path="../src/services/order.repo.ts" />
/// <reference path="../src/services/user.repo.ts" />
/// <reference path="../src/utils/xhr_json_backend.ts" />
/// <reference path="../src/components/loggedInUser/loggedInUser.component.ts" />
/// <reference path="../src/components/login/login.component.ts" />
/// <reference path="../src/components/toolbar/toolbar.component.ts" />
/// <reference path="../src/components/app/app.component.ts" />
/// <reference path="../src/components/grid/grid.component.ts" />
/// <reference path="../src/components/home/home.component.ts" />
/// <reference path="../src/controls/modal/modal.component.ts" />
//App exports - end
