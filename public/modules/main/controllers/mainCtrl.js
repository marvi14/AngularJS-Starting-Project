define(['modules/main/module'], function(module) {
    'use strict';

    module.registerController('mainCtrl', ['$scope', '$translate', '$timeout', 'sessionService', 'ModalService', '$location', 'Main',
        function($scope, $translate, $timeout, sessionService, ModalService, $location, Main) {

            Main.getAllPosts().$promise.then(function(response) {
                $scope.posts = response;
            }, function(error) {
                error;
            });

        }
    ]);
});
