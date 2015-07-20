/**
 * Created by vgoya2 on 7/6/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, NgFor, CSSClass} from 'typings/app.exports';

@Component({
    selector: 'modal',
    properties: ['title', 'buttons', 'visible', 'callback']
})
@View({
    templateUrl: 'src/components/modal/modal.html',
    styleUrls: ['src/components/modal/modal.css'],
    directives: [NgFor, CSSClass]
})
export class Modal {
    title: string;
    buttons: string;
    callback: Function;
    values: Object;
    classObject: Object;

    constructor () {
        this.values = {};
        this.classObject = {'modal': true, 'visible': false};
    }

    set visible (val) {
        this.classObject['visible'] = val;
    }

    onModalButtonClick ($event, clickedButton) {
        this.getFormValues($event);
        this.callback(clickedButton, this.values);
    }

    getFormValues ($event) {
        let target = $event.target;
        let modalElement = target;
        while(!modalElement.classList.contains('modal')) {
            modalElement = modalElement.parentElement;
        }
        let contentElement = modalElement.querySelector('content');
        let injectedElements = Array.prototype.slice.call(contentElement.getDistributedNodes(), 0);
        injectedElements.forEach(e => {this.collectValues(e)});
    }

    collectValues (element) {
        let inputNodeTypes = ['INPUT'];
        if (inputNodeTypes.indexOf(element.nodeName) === -1) {
            let children = element.childNodes;
            if (children.length) {
                for(let i = 0; i < children.length; i++) {
                    this.collectValues(children[i]);
                }
            }
        } else {
            this.values[element.name] = element.value;`                                                                                             `
        }
    }
}
