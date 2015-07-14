/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, Router, NgFor} from 'typings/app.exports';
import {UserRepo} from '../../services/user.repo';
import {IUser} from '../../interfaces/user';

@Component({
    selector: 'login',
    appInjector: [UserRepo]
})
@View({
    templateUrl: 'src/components/login/login.html',
    styleUrls: ['src/components/login/login.css'],
    directives: [NgFor]
})
export class Login {
    router: Router;

    constructor(r: Router, public userRepo: UserRepo) {
        this.router = r.parent;
    }

    login(username): void {
        this.router.navigate('/Home/' + username);
    }
}

