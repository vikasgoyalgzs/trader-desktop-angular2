/**
 * Created by vgoya2 on 6/26/15.
 */

/// <reference path="../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Inject} from 'typings/app.exports';
import {Http} from '../../jspm_packages/npm/angular2/http';
import {IInstrument} from '../interfaces/instrument';
import {IRepository} from '../interfaces/repository';

export class InstrumentRepo implements IRepository<IInstrument> {
    http: Http;
    instruments: Array<string>;

    constructor(@Inject(Http) _http: Http) {
        this.http = _http;
        this.get()
            .subscribe(instruments => this.instruments = instruments.map(i => i.symbol));
    }

    insert (instrument: IInstrument) {
        console.log('Method not implemented');
    }

    remove (id: string) {
        console.log('Method not implemented');
    }

    find (id: string) {
        console.log('Method not implemented');
    }

    get() {
        return this.http.get('/instruments')
            .map(res => res.json());
    }

}
