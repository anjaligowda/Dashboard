define([
    'jscore/core',
    './MyWidgetView'
], function (core, View) {
    'use strict';

    /**
     * Basic widget template.
     *
     * Create your custom template in seconds using the live template feature provided by different tools.
     */

    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            var counter =0;
           // alert(counter)
              this.view.getButton().addEventHandler('click', function(){
                  console.log(this.view.getElement().find('.ebInput').getNative())
              }, this);
              this.view.getAppendButton().addEventHandler('click', function(){
              counter++;
              var input = document.createElement("input");
                       
              input.type = 'text';
              input.className = 'ebInput ebInput_labeled_top eb_wMargin ebInput'+counter;
              input.placeholder = 'Type' + counter;
              this.view.getInputForm().getNative().append(input);
            }, this);

            this.view.getDeleteButton().addEventHandler('click', function(){
                var count = counter;
                var ele = this.view.getElement().find('.ebInput'+count);
                ele.getNative().remove();
                count--;

            },this);
            this.view.getButton().addEventHandler('click', this.sendMessage, this);

        },
        sendMessage: function () {

            
            var teamName = this.view.getTeamName().getValue(),
                membsersName = this.view.getTeamMembersName().getValue(),
                projectName = this.view.getProjectName().getValue(),
                reposName = this.view.getReposName().getValue();
            var msg = teamName + membsersName + projectName + reposName;
        },
       
        onDestroy: function () {

        }

    });

});
