define(['modules/main/module'], function(module) {
    'use strict';

    module.registerController('mainCtrl', ['$scope', '$translate', '$timeout', 'sessionService', 'ModalService', '$location', 'Main',
        function($scope, $translate, $timeout, sessionService, ModalService, $location, Main) {

            Main.query().$promise.then(function(response) {
                $scope.list = response.plates;
            }, function(error) {
                error;
            });

        }
    ]);
});
