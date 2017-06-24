(function () {
    'use strict';

    angular.module('app')
        .controller('routeController', [routeController])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/items', {
                    template: '<as-items items="$resolve.items"></as-items>',
                    controller: routeController,
                    controllerAs: 'vm',
                    resolve: {
                        items: function (itemsService) {
                            return itemsService.getAll();
                        }
                    }
                })
                .when('/', {
                    redirectTo: '/items'
                });
        }]);

    function routeController() {
        var vm = this;
    }
})();