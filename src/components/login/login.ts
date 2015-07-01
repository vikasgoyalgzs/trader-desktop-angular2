/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, Injector} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/angular2';
import {Router} from 'jspm_packages/npm/angular2@2.0.0-alpha.28/router';
@Component({
  selector: 'login'
})
@View({
  templateUrl: 'src/components/login/login.html'
})
export class Login {
  router: Router;

  constructor (r: Router) {
    this.router = r.parent;
  }
  login (username) {
    this.router.navigate('/Home/' + username);
  }
}

