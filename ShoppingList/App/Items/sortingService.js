(function () {
    'use strict';

    angular.module('app')
        .factory('sortingService', [sortingService]);

    function sortingService() {
        var sorted;

        return {
            sorting: sorting,
            sortOn: sortOn
        };

        function sorting(){
            if (!sorted) {
                sorted = {
                    sortedOn: 'frequency',
                    initialView: true,
                };
            }
            return sorted;
        }

        function sortOn(field) {
            sorted.sortedOn = field;
            sorted.sortedDesc = !sorted.sortedDesc;

            return sorted;
        }
    }
})();