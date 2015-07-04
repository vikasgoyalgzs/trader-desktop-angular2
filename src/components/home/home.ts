/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, Router, RouteParams} from 'typings/app.exports';

import {LoggedinUser} from '../loggedInUser/loggedInUser';
import {Toolbar} from '../toolbar/toolbar';
import {Grid} from '../grid/grid';
import {IUser} from '../../models/user';

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
        let userid = routeParams.params.username;
        this.loggedInUser = {
            id: 'VG',
            name: 'Vikas Goyal'
        };
    }
}
