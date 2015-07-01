/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {LoggedinUser} from '../loggedInUser/loggedInUser';
import {Toolbar} from '../toolbar/toolbar';
import {Grid} from '../grid/grid';
import {User} from '../../models/user'
import {RouteParams} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/router';

@Component({
    selector: 'home'
})
@View ({
    templateUrl: 'src/components/home/home.html',
    directives: [LoggedinUser, Toolbar, Grid]
})
export class Home {
    loggedInUser:User;

    constructor(routeParams:RouteParams) {
        var userid = routeParams.params.username;
        this.loggedInUser = {
            id: 'VG',
            name: 'Vikas Goyal'
        };
    }
}
