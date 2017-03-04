define(['modules/directives/module'], function(module) {

    'use strict';

    module.registerDirective('dropdown', ['$timeout', function($timeout) {
        return {
            require: "ngModel",
            restrict: "E",
            replace: true,
            scope: {
                array: "=",
                ngModel: "="
            },
            template: '<div>' +
                '<label for="inputCategory">{{label}}</label>' +
                '<select ng-model="ngModel" data-placeholder={{title}} tabindex={{tabindex}}>' +
                '<option ng-repeat="obj in array" value={{obj[optValue]}} > {{obj[optDescription]}} </option>' +
                '</select>' +
                '</div>',
            link: function(scope, element, attrs) {
                scope.label = attrs.label;
                scope.title = attrs.title;
                scope.tabindex = attrs.tabindex;
                scope.optValue = attrs.optValue;
                scope.optDescription = attrs.optDescription;
                element.addClass("form-group postSubmitCat clearfix border-dropdown");
                $(element.children()[1]).addClass("chosen-select postsubmitSelect");

                scope.$watch('ngModel', function(newValue, oldValue) {
                    if (newValue) {
                        scope.ngModel = newValue;
                    }
                }, true);

                $timeout(function() {
                    var t = $(".chosen-select").chosen();
                    t.on("change", function() {
                        $(".LPtagsContainer").empty(),
                            t.find(":selected").each(function(a, i) {
                                $('<div class="active-tag">' + i.value + '<div class="remove-tag"><i class="fa fa-times"></i></div></div>').appendTo(".LPtagsContainer").on("click", function() {
                                        $(this).remove(),
                                            $(i).attr("selected", !1),
                                            t.trigger("chosen:updated"),
                                            $('.LPtagsContainer input[value="' + i.value + '"]').remove()
                                    }),
                                    $('<input type="hidden" name="select_tag" value="' + i.value + '" />').appendTo(".LPtagsContainer")
                            })
                    });
                });

            }
        };
    }]);
});
