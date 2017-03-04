define(['modules/services/module'], function (module) {

    'use strict';

    module.registerFactory('sessionService', function () {

        return {
            set: function (key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            },
            get: function (key) {
                return JSON.parse(localStorage.getItem(key));
            },
            destroy: function (key) {
                return localStorage.removeItem(key);
            }
        };

    });

    module.registerFactory('httpRequestInterceptor', function ($rootScope) {
        return {
            request: function (config) {

                var language = navigator.language.toUpperCase() || navigator.userLanguage.toUpperCase();
                if (language !== 'ES' && language !== 'EN' && language !== 'PR')
                    language = 'ES';
                config.headers['Accept-Language'] = language;

                if ($rootScope.appToken)
                    config.headers['Authorization'] = $rootScope.appToken;

                return config;
            }
        };
    });

    module.registerFactory('ImageFactory', function () {
        return {
            getBase64: function (file, callback) {
                var coolFile = {};

                function readerOnload(e) {
                    var base64 = btoa(e.target.result);
                    coolFile.base64 = base64;
                    callback(coolFile)
                };

                var reader = new FileReader();
                reader.onload = readerOnload;

                var file = file.files[0];
                coolFile.filetype = file.type;
                coolFile.size = file.size;
                coolFile.filename = file.name;
                reader.readAsBinaryString(file);
            }
        }
    });

    module.registerFactory('browserNotification', ['$timeout', 'webNotification', function ($timeout, webNotification) {
        return {
            show: function (title, body, callback) {
                var snd = new Audio('audio/alert.mp3');
                snd.play();
                //the timeout is to sync the sound with the notification rendering on screen
                $timeout(function () {
                    var hideNotification;
                    webNotification.showNotification(title, {
                        body: body,
                        icon: 'img/icon.png',
                        onClick: function onNotificationClicked() {
                            if (callback)
                                callback();
                            if (hideNotification) {
                                hideNotification();
                            }
                        },
                        autoClose: 5000
                    }, function onShow(error, hide) {
                        if (!error) {
                            hideNotification = hide;
                        }
                    });
                }, 150);
            }
        }
    }]);

});
