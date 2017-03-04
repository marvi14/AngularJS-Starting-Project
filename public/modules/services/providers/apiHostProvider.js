define(['modules/services/module'], function(module) {

    'use strict';

    module.registerProvider('ApiHost', function() {

        this.address = '';
        this.baseUrl = '';

        this.$get = function() {
            return {
                address: this.address,
                baseUrl: this.baseUrl
            };
        };

    });

});