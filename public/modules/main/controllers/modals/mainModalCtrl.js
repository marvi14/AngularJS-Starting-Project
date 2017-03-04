define(['modules/main/module'], function(module) {
    'use strict';

    module.registerController('mainModalCtrl', ['$scope', '$translate', 'close', '$timeout', function($scope, $translate, close, $timeout) {
        $scope.close = function(result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };
    }]);
});
