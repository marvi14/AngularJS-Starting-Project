define(['modules/main/module'], function(module) {
    'use strict';

    module.registerController('policyCtrl', ['$scope', '$translate', '$timeout', '$http', '$sce',
        function($scope, $translate, $timeout, $http, $sce) {
           
        /*$http.post('',{myParams}).success(function (response) {
            var file = new Blob([response], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            $scope.content = fileURL;
        });*/


        $http.get('https://res.cloudinary.com/hfi3t1mni/raw/upload/v1485282175/PrivacyPolicy_pucxha.pdf', {responseType:'arraybuffer'})
        .success(function (response) {
           
            var file = new Blob([(response)], {type: 'application/pdf'});
     var fileURL = URL.createObjectURL(file);
     $scope.content = $sce.trustAsResourceUrl(fileURL);

           /* var file = new Blob([response], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);

            $scope.content = $sce.trustAsResourceUrl(fileURL);*/
        });

        }
    ]);
});
