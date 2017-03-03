define(['modules/services/module', 'socket.io'], function(module, io) {

    'use strict';

    module.registerFactory('sessionService', function() {

        return {
            set: function(key, value) {
                return localStorage.setItem(key, JSON.stringify(value));
            },
            get: function(key) {
                return JSON.parse(localStorage.getItem(key));
            },
            destroy: function(key) {
                return localStorage.removeItem(key);
            }
        };

    });

    module.registerFactory('FacebookOauth', ['Facebook', '$window', function(Facebook, $window) {
        return {
            getToken: function() {
                var promise = {};
                promise = Facebook.login(function(response) {
                    return response.access_Token;
                }, { scope: 'email,public_profile' });
                return promise;
            }
        }
    }]);

    module.registerFactory('GoogleOauth', ['GoogleSignin', '$window', function(GoogleSignin, $window) {
        return {
            getToken: function() {
                return GoogleSignin.signIn();
            }
        }
    }]);

    module.registerFactory('httpRequestInterceptor', function($rootScope) {
        return {
            request: function(config) {

                var language = navigator.language.toUpperCase() || navigator.userLanguage.toUpperCase();
                if (language !== 'ES' && language !== 'EN' && language !== 'PR')
                    language = 'ES';
                config.headers['Accept-Language'] = language;

                // if ($rootScope.appToken)
                //     config.headers['Authorization'] = $rootScope.appToken;

                return config;
            }
        };
    });

    module.registerFactory('cartService', function() {
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        return {
            getCart: function() {
                return JSON.parse(localStorage.getItem('cart')) || [];
            },
            addPlate: function(plate) {
                if (!this.cart)
                    this.cart = this.getCart();
                this.cart.push(plate);
                localStorage.setItem('cart', JSON.stringify(this.cart));
                return true;
            },
            removePlate: function(plateId) {
                if (!this.cart)
                    this.cart = this.getCart();
                var indexToRemove = -1;
                for (var i = 0; i < this.cart.length; i++) {
                    if (plateId === this.cart[i]._id)
                        indexToRemove = i;
                }

                if (indexToRemove != -1) {
                    this.cart.splice(indexToRemove, 1);
                    localStorage.setItem('cart', JSON.stringify(this.cart));
                    return true;
                } else
                    return false;
            },
            clearCart: function() {
                if (!this.cart)
                    this.cart = this.getCart();
                this.cart = [];
                localStorage.setItem('cart', JSON.stringify(this.cart));
            }
        }
    });

    module.registerFactory('ImageFactory', function() {
        return {
            getBase64: function(file, callback) {
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

    module.registerFactory('socketio', ['$rootScope', 'ApiHost', function($rootScope, ApiHost) {
        var socket = io.connect(ApiHost.baseUrl);
        return {
            on: function(eventName, callback) {
                socket.on(eventName, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function(eventName, data, callback) {
                socket.emit(eventName, data, function() {
                    var args = arguments;
                    $rootScope.$apply(function() {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
        };
    }])

    module.registerFactory('browserNotification', ['$timeout', 'webNotification', function($timeout, webNotification) {
        return {
            show: function(title, body, callback) {
                var snd = new Audio('audio/alert.mp3');
                snd.play();
                //the timeout is to sync the sound with the notification rendering on screen
                $timeout(function() {
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
