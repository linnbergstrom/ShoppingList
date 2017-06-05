(function () {
    'use strict';

    angular.module('app')
        .controller('routeController', [routeController])
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/items/needed", {
                    template: "<sl-items items='$resolve.items'></sl-items>",
                    controller: routeController,
                    controllerAs: 'vm',
                    resolve: {
                        items: function (itemsService) {
                            return itemsService.getAll();
                        }
                    }
                })
                .when("/items/available", {
                    template: "<sl-items items='$resolve.items'></sl-items>",
                    controller: routeController,
                    controllerAs: 'vm',
                    resolve: {
                        items: function (itemsService) {
                            return itemsService.getAll();
                        }
                    }
                })
                .when("/", {
                    redirectTo: "/items/needed"
                });

        }]);

    function routeController() {
        var vm = this;
    }

    //.config(function ($stateProvider) {
    //    $stateProvider.state = {
    //        name: 'items',
    //        url: '/items',
    //        component: 'items',
    //        resolve: {
    //            items: function (itemsService) {
    //                return itemsService.getAll();
    //            }
    //        }
    //    }
    //})
})();