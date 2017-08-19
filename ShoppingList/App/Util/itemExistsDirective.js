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
                    return itemsService.getAll().then(function (items) {
                        var names = items.needed.map(n => n.title.toLowerCase());
                        var exists = names.find(function (name) {
                            return modelValue.toLowerCase() === name;
                        });
                        if (exists) {
                            return $q.reject();
                        }
                        return $q.resolve();
                    });
                }
            };
        }]);
})();