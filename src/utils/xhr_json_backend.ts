/**
 * Created by vgoya2 on 7/9/15.
 */

import {ConnectionBackend, Connection} from '../../jspm_packages/npm/angular2/src/http/interfaces';
import {ReadyStates, RequestMethods} from '../../jspm_packages/npm/angular2/src/http/enums';
import {Request} from '../../jspm_packages/npm/angular2/src/http/static_request';
import {Response} from '../../jspm_packages/npm/angular2/src/http/static_response';
import {Inject, Injectable} from '../../jspm_packages/npm/angular2/di';
import {BrowserXHR} from '../../jspm_packages/npm/angular2/src/http/backends/browser_xhr';
import * as Rx from 'rx';

export class XHRJsonConnection implements Connection {
    request:Request;
    /**
     * Response
     * [Subject](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md)
     * which emits a single {@link Response} value on load event of `XMLHttpRequest`.
     */
    response:Rx.Subject<Response>;
    readyState:ReadyStates;
    private _xhr;

    constructor(req:Request) {
        this.request = req;
        if (Rx.hasOwnProperty('default')) {
            this.response = new (<any>Rx).default.Rx.Subject();
        } else {
            this.response = new Rx.Subject<Response>();
        }
        this._xhr = new window.XMLHttpRequest();
        this._xhr.open(RequestMethods[req.method], req.url);
        this._xhr.addEventListener(
            'load',
            () => {
                this.response.onNext(new Response(this._xhr.response || this._xhr.responseText))
            });
        this._xhr.setRequestHeader('content-type', 'application/json');
        this._xhr.send(this.request.text());
    }

    dispose () {

    }
}
@Injectable()
export class XHRJsonBackend implements ConnectionBackend {
    createConnection(request: Request): XHRJsonConnection {
        return new XHRJsonConnection(request);
    }
}
