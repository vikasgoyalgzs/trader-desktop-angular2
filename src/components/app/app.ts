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
  appInjector: []
})
@View({
  templateUrl: 'src/components/app/app.html',
  directives: [RouterOutlet]
})
@RouteConfig([
  { path: '/', component: Login, as: 'login' },
  { path: '/Home/:username', component: Home }
])
class AppComponent {
}

bootstrap(AppComponent, [routerInjectables, httpInjectables]);
