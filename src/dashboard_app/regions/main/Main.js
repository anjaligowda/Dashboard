define([
    'jscore/core',
    './MainView',
    'i18n!dashboard_app/dictionary.json',
    '../../widgets/addwidget/AddWidget',
    'container/api'

], function (core, View, dictionary, AddWidget, container) {
    'use strict';

    return core.Region.extend({

        View: View,

        onStart: function () {
            var eventBus = this.getEventBus();
            var count = 0;

            this.sayHelloEvtId = this.getEventBus().subscribe('sayhello', function () {
                count++;
                this.view.getHello().setText(dictionary.hello + ' ' + count);
            }.bind(this));

            
            eventBus.subscribe('addConfig', this.addConfigScreen.bind(this));
            this.availableWidgets = {
                SampleTable: {
                    header: dictionary.get('sampleTable.header'),
                    type: 'SampleTable',
                    config: {}
                },
                SampleWidget: {
                    header: dictionary.get('sampleWidget.header'),
                    type: 'SampleWidget',
                    config: this.sampleWidgetConfig
                }
                /* LineChart: {
                    header: dictionary.get('lineChart.header'),
                    type: 'LineChart',
                    config: this.lineChartConfig,
                    maximizable: true,
                    settings: false
                } */
            };
            
        },
        
        addConfigScreen: function () {
            alert("am heer")
            if (this.addConfig === undefined) {
                // the flyout does not destroy the widget,
                // keep the instance and update it
                this.addWidget = new AddWidget();
                // listen to the add event and add the selected widget
                this.addWidget.addEventHandler('add', onWidgetAdd, this);
                this.addWidget.addEventHandler('cancel', hideFlyout.bind(this));
            }

            // loop through the available widgets and create an array (using Array.map) containing the header and type name.
            var availableWidgets = Object.keys(this.availableWidgets).map(function (wName) {
                return {
                    header: this.availableWidgets[wName].header,   // user friendly, used for select item label
                    type: this.availableWidgets[wName].type        // used for value
                };
            }.bind(this));

            this.addWidget.setAvailableWidgets(availableWidgets);
            this.addWidget.setColumnsLayout('four-columns');

            // open the flyout panel to show the add widget screen
            showFlyout(dictionary.newteam.addConfig, this.addWidget);
        },
        

        onStop: function () {
            this.getEventBus().unsubscribe('sayhello', this.sayHelloEvtId);
           // this.getEventBus().unsubscribe('addConfig', this.sayHelloEvtId);
        }

    });

     //-----------------------------------------------
     function hideFlyout() {

        // hide flyout using container API
        container.getEventBus().publish('flyout:hide');
    }

    //-----------------------------------------------
    function showFlyout(header, content) {

        // show flyout using container API
        container.getEventBus().publish('flyout:show', {
            header: header,
            content: content
        });
    }
    function onWidgetAdd(options) {
        /*jshint validthis:true */
        if (options === undefined) {
            return;
        }

        options.widgets.forEach(function (wType) {
            if (this.availableWidgets[wType]) {
                this.dashboard.addItem(this.availableWidgets[wType], options.column || 0, 0);
            }
        }.bind(this));

        hideFlyout();
    }

});
