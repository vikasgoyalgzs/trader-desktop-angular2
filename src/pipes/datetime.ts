/**
 * Created by vgoya2 on 7/8/15.
 */

/// <reference path="../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />
import {Pipe} from 'typings/app.exports';

export class DateTimePipe implements Pipe {
    supports(obj) {
        return obj && !isNaN(new Date(obj).getDay());
    }

    onDestroy() {

    }

    transform(value) {
        return moment(value).format('MM/DD/YYYY hh:mm:ss A');
    }

    create () {
        return this;
    }
}
