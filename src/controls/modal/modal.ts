/**
 * Created by vgoya2 on 7/6/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2@2.0.0-alpha.28/angular2.d.ts" />

import {Component, View, NgFor} from 'typings/app.exports';

@Component({
    selector: 'modal',
    properties: ['title', 'buttons', 'hidden', 'callback']
})
@View({
    templateUrl: 'src/controls/modal/modal.html',
    directives: [NgFor]
})
export class Modal {
    title: string;
    buttons: string;
    callback: Function;
    values: Object;

    constructor () {
        this.values = {};
    }

    onButtonClick ($event, clickedButton) {
        this.getFormValues($event);
        this.callback(clickedButton, this.values);
    }

    getFormValues ($event) {
        let target = $event.target;
        let modalElement = target;
        while(modalElement.nodeName !== 'MODAL') {
            modalElement = modalElement.parentNode;
        }
        let scriptElement = modalElement.querySelector('script[type="ng/contentStart"]');
        if (scriptElement) {
            let injectedElements = [];
            let nextElement = scriptElement.nextSibling;
            while (nextElement.type !== 'ng/contentEnd') {
                if (nextElement.nodeType !== 3) {
                    injectedElements.push(nextElement);
                }
                nextElement = nextElement.nextSibling;
            }
            injectedElements.forEach(e => {this.collectValues(e)});
        }
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
            this.values[element.name] = element.value;
        }
    }
}
