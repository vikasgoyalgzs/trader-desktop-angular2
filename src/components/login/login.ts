/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, Router} from 'typings/app.exports';

@Component({
    selector: 'login'
})
@View({
    templateUrl: 'src/components/login/login.html',
    styleUrls: ['src/components/login/login.css']
})
export class Login {
    router: Router;

    constructor(r: Router) {
        this.router = r.parent;
    }

    login(username): void {
        this.router.navigate('/Home/' + username);
    }
}

