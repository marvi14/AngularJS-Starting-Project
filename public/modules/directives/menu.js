define(['modules/directives/module'], function(module) {

    'use strict';

    module.registerDirective('menu', ['$timeout', 'ModalService', '$translate', '$window', function($timeout, ModalService, $translate, $window) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: './modules/layout/menu.html',
            link: function(scope, element, attrs) {

                element.ready(function() {
                    $(window).scroll(function() {
                        var scroll = $(window).scrollTop();
                        if (scroll >= 50)
                            $("header").addClass("sticky");

                        else
                            $("header").removeClass("sticky");

                    });
                });

                scope.setLanguage = function(key) {
                    $translate.use(key);
                }

                function onResize() {
                    var height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight;
                    $timeout(function() {
                        $('#hero_video_section').css("cssText", "height:" + height + "px !important;");
                    });
                };

                function cleanUp() {
                    angular.element($window).off('resize', onResize);
                }

                angular.element($window).on('resize', onResize);
                scope.$on('$destroy', cleanUp);

                scope.showLeftMenu = function() {
                    if (!$(".main-menu").hasClass('show'))
                        $(".main-menu").addClass("show");
                    else
                        $(".main-menu").removeClass("show");
                }
                scope.hideLeftMenu = function() {
                    $(".main-menu").removeClass("show");
                }
            }
        };
    }]);
});
