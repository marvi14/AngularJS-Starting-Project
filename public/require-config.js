'use strict';

require.config({
    waitSeconds: 0,
    paths: {
        'jquery': 'js/jquery-1.11.2.min',
        'angular': 'lib/angular/angular',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angularRoute': 'lib/angular-route/angular-route',
        'angularMocks': 'lib/angular-mocks/angular-mocks',
        'angularTranslate': 'lib/angular-translate/angular-translate',
        'angularTranslateLoadProvider': 'lib/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angularModalService': 'lib/angular-modal-service/dst/angular-modal-service.min',
        'angularMaps': 'lib/ngmap/build/scripts/ng-map.min',
        'angularCouchPotato': 'lib/angular-couch-potato/dist/angular-couch-potato',
        'angularResource': 'lib/angular-resource/angular-resource.min',
        'text': 'lib/requirejs-text/text',
        'cat_nav_mobile': 'js/cat_nav_mobile',
        'video_header': 'js/video_header',
        'ion.rangeSlider': 'js/ion.rangeSlider',
        'sliderPro': 'js/jquery.sliderPro.min',
        'jquery-loader': 'js/jquery.loader.min',
        'LoaderUtils': 'utils/LoaderUtils',
        'angular-parallax': 'lib/angular-parallax/scripts/angular-parallax',
        'angular-facebook': 'lib/angular-facebook/lib/angular-facebook',
        'angular-google': 'lib/ng-google-signin/dist/ng-google-signin.min',
        'jquery-confirm': 'lib/jquery-confirm2/dist/jquery-confirm.min',
        'underscore': 'lib/underscore/underscore-min',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'bootstrap-ui-datetime-picker': 'lib/bootstrap-ui-datetime-picker/dist/datetime-picker.min',
        'angular-ui-notification': 'lib/angular-ui-notification/dist/angular-ui-notification.min',
        'angular-slick': 'lib/angular-slick/dist/slick.min',
        'slick-carousel': 'lib/slick-carousel/slick/slick.min',
        'moment': 'lib/moment/min/moment-with-locales.min',
        'anglar-stars': 'lib/angular-input-stars-directive/angular-input-stars',
        'angular-ui-select': 'lib/angular-ui-select/dist/select.min',
        'ngSanitize': 'lib/angular-sanitize/angular-sanitize.min',
        'socket.io': 'lib/socket.io-client/socket.io',
        'html5-notifications': 'lib/html5-desktop-notifications/dist/Notification.min',
        'angular-web-notification': 'lib/angular-web-notification/angular-web-notification',
        'ng-infinite-scroll': 'lib/ngInfiniteScroll/build/ng-infinite-scroll.min',
        'modernizr': 'js/modernizr',
        'angular-chips': 'js/angular-chips.min'
    },
    shim: {
        //si se agrega jquery-ui hay que agregarlo aca en deps desp dee jquery
        'bootstrap': {
            deps: ['jquery'],
            exports: "$.fn.popover"
        },
        'cat_nav_mobile': {
            deps: ['jquery']
        },
        'video_header': {
            deps: ['jquery']
        },
        'ion.rangeSlider': {
            deps: ['jquery']
        },
        'sliderPro': {
            deps: ['jquery']
        },
        'jquery-loader': {
            deps: ['jquery'],
            exports: '$'
        },
        'slick-carousel': {
            deps: ['jquery']
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
        'angularRoute': ['angular'],
        'angularTranslate': ['angular'],
        'angularTranslateLoadProvider': ['angularTranslate'],
        'angularModalService': ['angular', 'bootstrap'],
        'angularCouchPotato': ['angular'],
        'angularResource': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'angular-parallax': {
            deps: ['angular']
        },
        'angular-facebook': {
            deps: ['angular'],
            exports: 'FB'
        },
        'angular-google': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'bootstrap-ui-datetime-picker': {
            deps: ['angular-bootstrap']
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
        'anglar-stars': {
            deps: ['angular']
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
        'socket.io': {
            exports: 'io'
        },
        'html5-notifications': {
            deps: ['angular']
        },
        'angular-web-notification': {
            deps: ['angular', 'html5-notifications']
        },
        'ng-infinite-scroll': {
            deps: ['angular']
        },
        'modernizr': {
            deps: ['jquery']
        },
        'angular-chips': {
            deps: ['angular']
        }

        //si se agregan despues, se tienen q agregar asi
        /*'daterangepicker': {
            deps: ['jquery']
        },
        'angular-daterangepicker': {
            deps: ['angular', 'daterangepicker']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'magnific-popup': {
            deps: ['jquery']
        },
        'videojs': {
            deps: ['jquery']
        }*/

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
