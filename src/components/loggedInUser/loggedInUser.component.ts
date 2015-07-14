/**
 * Created by vgoya2 on 6/25/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, Router} from 'typings/app.exports';

@Component({
    selector: 'loggedin-user',
    properties: ['user']
})
@View({
    templateUrl: 'src/components/loggedInUser/loggedInUser.html'
})
export class LoggedinUser {
    router: Router;

    constructor(r: Router) {
        this.router = r.parent;
    }

    signOut(): void {
        this.router.navigate('/');
    }
}
