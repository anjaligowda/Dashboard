define([
    'jscore/core',
    'i18n!dashboard_app/dictionary.json',
    'layouts/TopSection',
    './regions/main/Main',
    'container/api',
    './widgets/my-widget/MyWidget'
], function (core, dictionary,
             TopSection,
             Main, container, MyWidget) {
    'use strict';

    return core.App.extend({

        /**
         * Called when the app is first instantiated in the current tab for the first time.
         * sad;;ad
         * sadasd
         * asdasd
         */
        onStart: function () {
            var eventBus = this.getEventBus(),
                topSection = new TopSection({
                    breadcrumb: this.options.breadcrumb,
                    title: this.options.properties.title,
                    context: this.getContext(),
                    defaultActions: [{
                    name: dictionary.get('newteam.addConfig'),
                    type: 'button',
                    action: function () {
                        container.getEventBus().publish('flyout:show', {
                            header: dictionary.get('Add a New Team'),
                            width: '400px',
                            content: new MyWidget()
                        });
                         
                    }
                     } ]
                });

            topSection.setContent(new Main({
                context: this.getContext()
            }));
            topSection.attachTo(this.getElement());
        },

        /**
         * This method is called when the user has left your app to view a different app.
         */
        onPause: function () {

        },

        /**
         * Called when the user navigates back to the application.
         */
        onResume: function () {

        },

        /**
         * Called before the user is about to leave your app, either by navigating away or closing the tab.
         */
        onBeforeLeave: function () {

        }

        // See complete documentation about the application lifecycle in the Container docs.

    });

});
