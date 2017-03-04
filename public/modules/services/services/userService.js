define(['modules/services/module'], function(module) {

    'use strict';

    module.registerService('userService', function() {
        return {
            getUser: function() {
                return JSON.parse(localStorage.getItem('user')) || {};
            },
            setUser: function(user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
    });
});
