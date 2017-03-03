define(['modules/404/module'], function(module) {
    'use strict';

    module.registerController('404Ctrl', ['$scope', '$translate', 'sessionService', '$rootScope', '$timeout',
        function($scope, $translate, sessionService, $rootScope, $timeout) {

            $timeout(function() {
                $('#body_id').css('overflow-y', 'hidden');
            });

        }
    ]);
});
