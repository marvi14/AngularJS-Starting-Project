'use strict';
define([
    'angular',
    'angularCouchPotato',
    'angularUiRouter'
], function(angular, couchPotato) {
    var module = angular.module('myApp.main', ['ui.router']);

    module.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider) {
        $stateProvider.state('main', {
            url:'/main',
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
    }]);

    couchPotato.configureApp(module);

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
