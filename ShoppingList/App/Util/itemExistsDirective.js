(function () {
    'use strict'
    angular.module('app')
        .directive('isItemExists', ['itemsService', '$q', function (itemsService, $q) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: link
            };

            function link(scope, elem, attrs, ngModel) {
                ngModel.$asyncValidators.unique = function (modelValue, viewValue) {
                    if (!modelValue) {
                        return $q.resolve();
                    }
                    return itemsService.itemUnique(modelValue);
                }
            };
        }]);
})();