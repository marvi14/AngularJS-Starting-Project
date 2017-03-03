'use strict';

define([
    'angular',
    'angularRoute',
    'angularTranslate',
    'angularTranslateLoadProvider',
    'angularModalService',
    'angularMaps',
    'angularCouchPotato',
    'angular-facebook',
    'angular-google',
    'angularResource',
    'bootstrap',
    'cat_nav_mobile',
    'video_header',
    'ion.rangeSlider',
    'sliderPro',
    'jquery-loader',
    'LoaderUtils',
    'angular-parallax',
    'jquery-confirm',
    'underscore',
    'angular-bootstrap',
    'bootstrap-ui-datetime-picker',
    'angular-ui-notification',
    'angular-slick',
    'slick-carousel',
    'moment',
    'anglar-stars',
    'angular-ui-select',
    'ngSanitize',
    'socket.io',
    'html5-notifications',
    'angular-web-notification',
    'ng-infinite-scroll',
    'modernizr',
    'angular-chips',
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
], function(angular, angularRoute, angularTranslate, angularTranslateLoadProvider, angularModalService, angularMaps, couchPotato, facebook, google) {
    // Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
        'ngRoute',
        'ngResource',
        'scs.couch-potato',
        'facebook',
        'google-signin',
        'pascalprecht.translate',
        'angularModalService',
        'ngMap',
        'ui.bootstrap',
        'ui.bootstrap.datetimepicker',
        'ui-notification',
        'ui.select',
        'slick',
        'angular-input-stars',
        'ngSanitize',
        'angular-web-notification',
        'infinite-scroll',
        'angular.chips',
        'myApp.directives',
        'myApp.services',
        'myApp.404',
        'myApp.main'
    ]);

    couchPotato.configureApp(app);

    app.config(['$routeProvider', '$translateProvider', 'ApiHostProvider', 'FacebookProvider', 'GoogleSigninProvider', '$locationProvider', '$httpProvider',
        function($routeProvider, $translateProvider, ApiHostProvider, FacebookProvider, GoogleSigninProvider, $locationProvider, $httpProvider) {

            //$locationProvider.html5Mode(true);

            //ROUTES DEFAULTS
            $routeProvider.when('', { redirectTo: '/main' }).when('/', { redirectTo: '/main' }).otherwise({ redirectTo: '/404' });

            FacebookProvider.init('540943859428626');
            //Google SDK
            GoogleSigninProvider.init({
                client_id: '712075678228-4nk55j0i8e3tk62pk5u72apv3aa0a80b.apps.googleusercontent.com'
            });

            //TRANSLATION CONFIGS
            $translateProvider.useStaticFilesLoader({
                prefix: 'translations/',
                suffix: '.json'
            });
            $translateProvider.useSanitizeValueStrategy('escaped');
            $translateProvider.preferredLanguage('es');

            //APIHOST CONFIGS
            var appConfig = {};
            appConfig.apiHost = "https://osogloton.herokuapp.com";
            appConfig.devHost = "http://localhost:8000"

            ApiHostProvider.address = appConfig.apiHost + '/api/v1';
            ApiHostProvider.baseUrl = appConfig.apiHost;
        }
    ]);

    app.run(['$couchPotato', '$timeout', '$rootScope', 'sessionService', 'ApiHost', '$window', 'userService', '$http', '$translate', 'ModalService', 'socketio', 'browserNotification', '$location',
        function($couchPotato, $timeout, $rootScope, sessionService, ApiHost, $window, userService, $http, $translate, ModalService, socketio, browserNotification, $location) {
            app.lazy = $couchPotato;
            $timeout(function() {
                $('#preloader').remove();
            }, 2000);
        }
    ]);

    return app;
});
