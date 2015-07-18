/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, Router, RouteParams} from 'typings/app.exports';

import {LoggedinUser} from '../loggedInUser/loggedInUser.component';
import {Toolbar} from '../toolbar/toolbar.component';
import {Grid} from '../grid/grid.component';
import {Chart} from '../chart/chart.component';
import {IUser} from '../../interfaces/user';
import {ViewSettings} from '../../services/viewsettings.service';

@Component({
    selector: 'home',
    appInjector: [ViewSettings]
})
@View ({
    templateUrl: 'src/components/home/home.html',
    directives: [LoggedinUser, Toolbar, Grid, Chart],
    styleUrls: ['src/components/home/home.css']
})
export class Home {
    loggedInUser: IUser;
    view: string;

    constructor(routeParams: RouteParams, public viewSettings: ViewSettings) {
        this.loggedInUser = routeParams.params.username;

        this.viewSettings.settingsObservable.subscribe(setting => {
            if (setting.key === 'viewMode') {
                this.view = setting.value;
            }
        })
    }
}
