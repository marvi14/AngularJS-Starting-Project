'use strict';

define([
    'angular',
    'angularTranslate',
    'angularTranslateLoadProvider',
    'angularModalService',
    'angularMaps',
    'angularCouchPotato',
    'angularUiRouter',
    'angularResource',
    'bootstrap',
    'jquery-loader',
    'LoaderUtils',
    'jquery-confirm',
    'underscore',
    'angular-bootstrap',
    'angular-ui-notification',
    'moment',
    'angular-ui-select',
    'ngSanitize',
    'html5-notifications',
    'angular-web-notification',
    'ng-infinite-scroll',
    //DIRECTIVES
    'modules/directives/module',
    'modules/directives/directives',
    'modules/directives/menu',
    //SERVICES
    'modules/services/module',
    'modules/services/providers/apiHostProvider',
    'modules/services/services/userService',
    'modules/services/services/factories',
    //APPLICATION MODULES
    'modules/main/module',
    'modules/404/module'
], function (angular, angularTranslate, angularTranslateLoadProvider, angularModalService, angularMaps, couchPotato) {
    // Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
        'ui.router',
        'ngResource',
        'scs.couch-potato',
        'pascalprecht.translate',
        'angularModalService',
        'ngMap',
        'ui.bootstrap',
        'ui-notification',
        'ui.select',
        'ngSanitize',
        'angular-web-notification',
        'infinite-scroll',
        'myApp.directives',
        'myApp.services',
        'myApp.404',
        'myApp.main'
    ]);

    couchPotato.configureApp(app);

    app.config(['$urlRouterProvider', '$translateProvider', 'ApiHostProvider', '$locationProvider', '$httpProvider',
        function ($urlRouterProvider, $translateProvider, ApiHostProvider, $locationProvider, $httpProvider) {

            //$locationProvider.html5Mode(true);

            //ROUTES DEFAULTS
            $urlRouterProvider.when('', '/main').when('/', '/main').otherwise('/404');

            //TRANSLATION CONFIGS
            $translateProvider.useStaticFilesLoader({
                prefix: 'translations/',
                suffix: '.json'
            });
            $translateProvider.useSanitizeValueStrategy('escaped');
            $translateProvider.preferredLanguage('es');

            //APIHOST CONFIGS
            var appConfig = {};
            appConfig.apiHost = "https://jsonplaceholder.typicode.com";

            ApiHostProvider.address = appConfig.apiHost + '/api/v1';
            ApiHostProvider.baseUrl = appConfig.apiHost;
        }
    ]);

    app.run(['$couchPotato', '$timeout', '$rootScope', 'sessionService', 'ApiHost', '$window', 'userService', '$http', '$translate', 'ModalService', 'browserNotification', '$location',
        function ($couchPotato, $timeout, $rootScope, sessionService, ApiHost, $window, userService, $http, $translate, ModalService, browserNotification, $location) {
            app.lazy = $couchPotato;
            $timeout(function () {
                $('#preloader').remove();
            }, 2000);
        }
    ]);

    return app;
});
