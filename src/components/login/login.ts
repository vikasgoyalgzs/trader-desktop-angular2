/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, Router, NgFor} from 'typings/app.exports';
import {Users} from '../../services/users';
import {IUser} from '../../models/user';

@Component({
    selector: 'login',
    appInjector: [Users]
})
@View({
    templateUrl: 'src/components/login/login.html',
    styleUrls: ['src/components/login/login.css'],
    directives: [NgFor]
})
export class Login {
    router: Router;
    users: Array<IUser>;

    constructor(r: Router, userSvc: Users) {
        this.router = r.parent;
        userSvc.get()
            .subscribe(users => this.users = users);
    }

    login(username): void {
        this.router.navigate('/Home/' + username);
    }
}

