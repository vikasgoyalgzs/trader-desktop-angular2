/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />
import * as Rx from 'rx';

let instance = null;
export class ViewSettings {
    settingsObservable: Rx.Subject;

    constructor() {
        if (!instance) {
            instance = this;
            this.settingsObservable = new Rx.Subject();
        }
        return instance;
    }
}

