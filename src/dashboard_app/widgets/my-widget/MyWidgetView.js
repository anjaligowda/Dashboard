define([
    'jscore/core',
    'text!./_myWidget.html',
    'styles!./_myWidget.less'
], function (core, template, styles) {
    'use strict';
    var _prefix = '.eaDashboard_app-wMyWidget';

    return core.View.extend({

        getTemplate: function () {
            return template;
        },

        getStyle: function () {
            return styles;
        },
        getButton: function () {
            return this.getElement().find(_prefix + '-sendBtn');
        },
        getTeamName: function () {
            return this.getElement().find(_prefix + '-teamName');
        },
        getTeamMembersName: function () {
            return this.getElement().find(_prefix + '-teamMembers');
        },
        getProjectName: function () {
            return this.getElement().find(_prefix + '-projectName');
        },
        getReposName: function () {
            return this.getElement().find(_prefix + '-reposName');
        }
    });

});
