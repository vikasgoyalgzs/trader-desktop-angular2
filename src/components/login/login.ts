/**
 * Created by vgoya2 on 5/27/15.
 */

/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Component, View, Injector} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d';
import {Router} from '../../../jspm_packages/npm/angular2@2.0.0-alpha.28/router.d';

@Component({
  selector: 'login',
  appInjector: [Router]
})
@View({
  templateUrl: 'components/login/login.html'
})
export class Login {
  router: Router;

  constructor (r: Router) {
    this.router = r;
  }
  login (user) {
    //router.navigate('/Home/' + '0');
    //console.log(userName);
  }
}

