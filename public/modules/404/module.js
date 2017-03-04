'use strict';
define([
    'angular',
    'angularCouchPotato',
    'angularUiRouter'
], function(angular, couchPotato) {
    var module = angular.module('myApp.404', ['ui.router']);

    module.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider) {
        $stateProvider.state('404', {
            url:'/404',
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
