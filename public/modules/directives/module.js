'use strict';
define([
    'angular',
    'angularCouchPotato'
], function(angular, couchPotato) {
    var module = angular.module('myApp.directives', []);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
