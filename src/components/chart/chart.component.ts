/**
 * Created by vgoya2 on 6/26/15.
 */
/// <reference path="../../../jspm_packages/npm/angular2/angular2.d.ts" />

import {Component, View, ObservableWrapper} from 'typings/app.exports';
import {IOrder} from '../../interfaces/order';
import {OrderRepo} from '../../services/order.repo';
import {ChartDir} from '../../directives/chart/chart.directive';
import * as Immutable from 'immutable';

@Component({
    selector: 'chart',
    appInjector: [OrderRepo],
    properties: ['chartOptions']
})
@View({
    templateUrl: 'src/components/chart/chart.html',
    styleUrls: ['src/components/chart/chart.css'],
    directives: [ChartDir]
})
export class Chart {
    chartOptions:Object;

    constructor(public orderRepo:OrderRepo) {
        this.chartOptions = {
            chart: {
                type: 'bar'
            },
            plotOptions: {
                series: {
                    stacking: 'percent'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            }
        };
        ObservableWrapper.subscribe(orderRepo.getOrdersEmitter(), orders => {
            let placed = [];
            let executed = [];
            let total = [];
            if (orders.length) {
                orders.forEach(function (order) {
                    placed.push(order.quantityPlaced);
                    executed.push(order.quantityExecuted);
                    total.push(order.quantity);
                });
                this.formatData(placed, executed, total);
            }
        });
    }

    formatData(placed, executed, total) {
        let xAxis = [{
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Total',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, {
            gridLineWidth: 0,
            title: {
                text: 'Order Id',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
        }];

        let yAxis = {
            min: 1,
            title: {
                text: 'Order Execution Status'
            },
            opposite: true
        };

        let series = [{
            name: 'Placed',
            type: 'bar',
            data: placed
        }, {
            name: 'Executed',
            type: 'bar',
            data: executed
        }, {
            name: 'Total Order',
            type: 'bar',
            data: total
        }];

        this.chartOptions = Object.assign(this.chartOptions, {
            yAxis: yAxis,
            series: series
        });
        this.chartOptions = Immutable.Map(this.chartOptions);
    }
}
