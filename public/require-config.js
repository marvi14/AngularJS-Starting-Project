'use strict';

require.config({
    waitSeconds: 0,
    paths: {
        'jquery': 'js/jquery-1.11.2.min',
        'angular': 'lib/angular/angular',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angularUiRouter' : 'lib/angular-ui-router/release/angular-ui-router.min',
        'angularMocks': 'lib/angular-mocks/angular-mocks',
        'angularTranslate': 'lib/angular-translate/angular-translate',
        'angularTranslateLoadProvider': 'lib/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angularModalService': 'lib/angular-modal-service/dst/angular-modal-service.min',
        'angularMaps': 'lib/ngmap/build/scripts/ng-map.min',
        'angularCouchPotato': 'lib/angular-couch-potato/dist/angular-couch-potato',
        'angularResource': 'lib/angular-resource/angular-resource.min',
        'text': 'lib/requirejs-text/text',
        'jquery-loader': 'js/jquery.loader.min',
        'LoaderUtils': 'utils/LoaderUtils',
        'underscore': 'lib/underscore/underscore-min',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-ui-notification': 'lib/angular-ui-notification/dist/angular-ui-notification.min',
        'moment': 'lib/moment/min/moment-with-locales.min',
        'angular-ui-select': 'lib/angular-ui-select/dist/select.min',
        'ngSanitize': 'lib/angular-sanitize/angular-sanitize.min',
        'html5-notifications': 'lib/html5-desktop-notifications/dist/Notification.min',
        'angular-web-notification': 'lib/angular-web-notification/angular-web-notification',
        'ng-infinite-scroll': 'lib/ngInfiniteScroll/build/ng-infinite-scroll.min',
        'jquery-confirm': 'lib/jquery-confirm2/dist/jquery-confirm.min'
    },
    shim: {
        //si se agrega jquery-ui hay que agregarlo aca en deps desp dee jquery
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        },
        'jquery-loader': {
            deps: ['jquery'],
            exports: '$'
        },
        'jquery-confirm': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'angular': {
            deps: ['bootstrap'],
            'exports': 'angular'
        },
        'angularUiRouter':['angular'],
        'angularTranslate': ['angular'],
        'angularTranslateLoadProvider': ['angularTranslate'],
        'angularModalService': ['angular', 'bootstrap'],
        'angularCouchPotato': ['angular'],
        'angularResource': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-ui-notification': {
            deps: ['angular']
        },
        'angular-slick': {
            deps: ['angular']
        },
        'moment': {
            exports: 'moment'
        },
        'angularMaps': {
            deps: ['angular']
        },
        'angular-ui-select': {
            deps: ['angular']
        },
        'ngSanitize': {
            deps: ['angular']
        },
        'html5-notifications': {
            deps: ['angular']
        },
        'angular-web-notification': {
            deps: ['angular', 'html5-notifications']
        },
        'ng-infinite-scroll': {
            deps: ['angular']
        }
    },
    priority: [
        "jquery"
    ]
});

require([
    'jquery',
    'angular',
    'app',
    'underscore',
    'moment'
], function($, angular, app, _, moment) {
    window.moment = moment;
    window._ = _;
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    $.fn.scrollTo = function(elem) {
        $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
        return this;
    };
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['myApp']);
    });
});
