/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Directive, ViewContainerRef, ProtoViewRef} from 'typings/app.exports';
import * as Immutable from 'immutable';

@Directive({
    selector: '[chart]',
    properties: ['chart']
})
export class ChartDir {
    renderedChart: Object;
    
    constructor(public viewContainer: ViewContainerRef, public protoViewRef: ProtoViewRef) {
    }

    set chart (options) {
        if (!options) {
            return;
        }
        if (options.toObject) {
            options = options.toObject();
        }
        if (options.series || options.data) {
            this.viewContainer.create(this.protoViewRef);

            //TODO: Vikas: This is a hack. find a better way to get access to chart element
            let chartElement = this.viewContainer.element.nativeElement.nextSibling;
            if (this.renderedChart) {
                this.renderedChart.destory();
            }
            options = Object.assign(options, {chart: {renderTo: chartElement}});
            this.renderedChart = new Highcharts.Chart(options);
        }
    }
}
