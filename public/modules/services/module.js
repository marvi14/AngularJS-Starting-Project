define([
    'angular',
    'angularCouchPotato'
], function(ng, couchPotato) {

    'use strict';

    var module = ng.module('myApp.services', []);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;

});
