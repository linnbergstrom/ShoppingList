(function () {
    'use strict';

    angular.module('app')
        .controller('routeController', [routeController])
        .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $routeProvider.when("/items", {
                template: "<sl-items items='vm.$resolve.items'></sl-items>",
                controller: routeController,
                controllerAs:'vm',
                //resolve: {
                //    items: function (itemsService) {
                //        return itemsService.getAll();
                //    }
                //}
            })
                .when("/", {
                    redirectTo: "/items"
                })
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