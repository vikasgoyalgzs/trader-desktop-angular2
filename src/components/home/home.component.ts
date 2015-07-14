/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, Router, RouteParams} from 'typings/app.exports';

import {LoggedinUser} from '../loggedInUser/loggedInUser.component';
import {Toolbar} from '../toolbar/toolbar.component';
import {Grid} from '../grid/grid.component';
import {IUser} from '../../interfaces/user';

@Component({
    selector: 'home'
})
@View ({
    templateUrl: 'src/components/home/home.html',
    directives: [LoggedinUser, Toolbar, Grid],
    styleUrls: ['src/components/home/home.css']
})
export class Home {
    loggedInUser: IUser;

    constructor(routeParams: RouteParams) {
        this.loggedInUser = routeParams.params.username;
    }
}
