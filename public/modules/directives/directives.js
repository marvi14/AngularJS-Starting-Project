define(['modules/directives/module'], function(module) {

    'use strict';

    module.registerDirective('compareTo', [function() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    var comparison = modelValue == scope.otherModelValue;
                    if(!comparison)
                        $(element).css('border-color', 'red');
                    else
                        $(element).css('border-color', '#ddd');
                    return comparison;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }])

    module.registerDirective('distinctTo', [function() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=distinctTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.distinctTo = function(modelValue) {
                    if (modelValue && scope.otherModelValue)
                        return modelValue.toLowerCase() != scope.otherModelValue.toLowerCase();
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    }])

    module.registerDirective('uiSelectRequired', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {

                ctrl.$validators.uiSelectRequired = function(modelValue, viewValue) {
                    var determineVal;
                    if (angular.isArray(modelValue)) {
                        determineVal = modelValue;
                    } else if (angular.isArray(viewValue)) {
                        determineVal = viewValue;
                    } else {
                        return false;
                    }

                    return determineVal.length > 0;
                };
            }
        };
    });

});
