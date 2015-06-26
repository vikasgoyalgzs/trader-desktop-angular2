/**
 * Created by vgoya2 on 5/24/15.
 */

/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, bootstrap} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {LoggedinUser} from 'components/loggedInUser/loggedinUser';
import {Toolbar} from 'components/toolbar/toolbar';
import {Grid} from 'components/grid/grid';

@Component({
    selector: 'my-app',
})
@View({
    templateUrl: 'components/app/app.html',
    directives: [LoggedinUser, Toolbar, Grid]
})
class AppComponent {
    name: string;

    constructor () {

    }
}

bootstrap(AppComponent);
