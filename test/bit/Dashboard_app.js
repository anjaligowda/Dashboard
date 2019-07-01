/*global define, describe, before, after, beforeEach, afterEach, it, expect */
define([
    'dashboard_app/Dashboard_app'
], function (Dashboard_app) {
    'use strict';

    describe('Dashboard_app', function () {

        it('Sample BIT test', function () {
            expect(Dashboard_app).not.to.be.undefined;
        });

    });

});
