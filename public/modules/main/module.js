'use strict';
define([
    'angular',
    'angularCouchPotato',
    'angularRoute'
], function(angular, couchPotato) {
    var module = angular.module('myApp.main', ['ngRoute']);

    module.config(['$routeProvider', '$couchPotatoProvider', function($routeProvider, $couchPotatoProvider) {
        $routeProvider.when('/main', {
            templateUrl: './modules/main/views/home.html',
            controller: 'mainCtrl',
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    './modules/main/controllers/mainCtrl',
                    './modules/main/controllers/modals/mainModalCtrl',
                    './modules/main/services/Main'
                ])
            }
        });

        $routeProvider.when('/terms', {
            templateUrl: './modules/main/views/terms.html',
            controller: 'termsCtrl',
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    './modules/main/controllers/termsCtrl'
                ])
            }
        });

        $routeProvider.when('/policy', {
            templateUrl: './modules/main/views/policy.html',
            controller: 'policyCtrl',
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    './modules/main/controllers/policyCtrl'
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
