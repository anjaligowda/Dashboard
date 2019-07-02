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
            this.view.getButton().addEventHandler('click', this.sendMessage, this);
            this.view.getAppendButton().addEventHandler('click', function(){
                counter++;
              var input = document.createElement("input");
              //var br = document.createElement('br');
            // alert(input)
             
              input.type = 'text';
              input.className = 'ebInput ebInput_labeled_top eb_wMargin ebInput'+counter;
              input.placeholder = 'Type' + counter;
              
            //  alert(counter)
           //   console.log(input.append(br))
              console.log(this.view.getInputForm().getNative())
              this.view.getInputForm().getNative().append(input);



             // type="text" class="eaDashboard_app-wMyWidget-teamMembers ebInput ebInput_labeled_top eb_wMargin" placeholder="Type"
            }, this);

            this.view.getDeleteButton().addEventHandler('click', function(){
                
                var ele = this.view.getElement().find('.ebInput'+counter);
                ele.getNative().remove();
                counter--;

            },this);
            this.view.getButton().addEventHandler('click', this.sendMessage, this);

        },
        sendMessage: function () {

            
            var teamName = this.view.getTeamName().getValue(),
                membsersName = this.view.getTeamMembersName().getValue(),
                projectName = this.view.getProjectName().getValue(),
                reposName = this.view.getReposName().getValue();
            var msg = teamName + membsersName + projectName + reposName;
                
                alert(msg)
                alert(this.getElement())
            /* var messageInputElt = this.view.getMessage(),
                msg = messageInputElt.getValue(),
                formData = new FormData();

            if (!msg) {
                alert('Empty message!');
                return;
            }

            messageInputElt.setValue('');
            formData.append('message', msg);
        	messageService.sendMessage(formData, this.addNewMessage.bind(this)); */

        },
       
        onDestroy: function () {

        }

    });

});
