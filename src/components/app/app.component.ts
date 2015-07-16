/**
 * Created by vgoya2 on 5/24/15.
 */

/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />
/// <reference path="../../../jspm_packages/npm/angular2/router.d.ts" />

import {
    Component,
    View,
    bootstrap,
    httpInjectables,
    routerInjectables,
    RouteConfig,
    RouterOutlet,
    XHRConnection,
    NativeShadowDomStrategy,
    ShadowDomStrategy,
    PipeRegistry,
    bind
} from 'typings/app.exports';

import {Http} from '../../../jspm_packages/npm/angular2/http';
import {BaseRequestOptions} from '../../../jspm_packages/npm/angular2/src/http/base_request_options';
import {XHRJsonBackend} from '../../utils/xhr_json_backend';
import {Login} from '../login/login.component';
import {Home} from '../home/home.component';
import {CustomPipes} from '../../pipes/customPipes';

@Component({
    selector: 'my-app',
    appInjector: []
})
@View({
    templateUrl: 'src/components/app/app.html',
    styleUrls: ['src/components/app/app.css'],
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/', component: Login, as: 'login'},
    {path: '/Home/:username', component: Home}
])
class AppComponent {
}

bootstrap(AppComponent, [
    bind(Http).toFactory((backend, options) => {
        return new Http(backend, options);
    }, [XHRJsonBackend, BaseRequestOptions]),
    routerInjectables,
    httpInjectables,
    bind(ShadowDomStrategy).toClass(NativeShadowDomStrategy),
    bind(PipeRegistry).toValue(new PipeRegistry(CustomPipes))
]);

