'use strict';
define([
    'angular',
    'angularCouchPotato',
    'angularRoute'
], function(angular, couchPotato) {
    var module = angular.module('myApp.404', ['ngRoute']);

    module.config(['$routeProvider', '$couchPotatoProvider', function($routeProvider, $couchPotatoProvider) {
        $routeProvider.when('/404', {
            templateUrl: './modules/404/views/404.html',
            controller: '404Ctrl',
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    'modules/404/controllers/404Ctrl'
                ])
            }
        });
    }]);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
