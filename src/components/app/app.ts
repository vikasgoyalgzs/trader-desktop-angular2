/**
 * Created by vgoya2 on 5/24/15.
 */

/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/router.d.ts" />

import {Component, View, bootstrap} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {Login} from '../login/login';
import {Home} from '../home/home';
import {httpInjectables} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/http';
import {routerInjectables, RouteConfig, RouterOutlet, RouterLink} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/router';

@Component({
    selector: 'my-app',
  appInjector: [httpInjectables]
})
@View({
  template: '<router-outlet><div><div router-link="home"></div></div></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/Login', component: Login, as: 'login' },
  { path: '/', component: Home, as: 'home' }
])
class AppComponent {
    name: string;

    constructor () {

    }
}

bootstrap(AppComponent, [routerInjectables, httpInjectables]);
