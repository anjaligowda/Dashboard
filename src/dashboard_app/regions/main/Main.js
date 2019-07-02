define([
    'jscore/core',
    './MainView',
    'i18n!dashboard_app/dictionary.json',
   
    'container/api'

], function (core, View, dictionary, container) {
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

            
            
        },
        
       
        

        onStop: function () {
            this.getEventBus().unsubscribe('sayhello', this.sayHelloEvtId);
           // this.getEventBus().unsubscribe('addConfig', this.sayHelloEvtId);
        }

    });

     
   
});
