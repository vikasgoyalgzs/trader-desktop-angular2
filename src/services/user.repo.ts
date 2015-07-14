/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />
import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2/http';
import {IUser} from '../interfaces/user';
import {IRepository} from '../interfaces/repository';

export class UserRepo implements IRepository<IUser>{
    http: Http;
    users: Array<IUser>;

    constructor(@Inject(Http) _http) {
        this.http = _http;
        this.get()
            .subscribe(users => this.users = users);
    }

    insert (user: IUser) {
        console.log('Method not implemented');
    }

    remove (id: string) {
        console.log('Method not implemented');
    }

    find (id: string) {
        console.log('Method not implemented');
    }

    get() {
        return this.http.get('/users')
            .map(res => res.json());
    }
}
