(function () {
    'use strict';

    function itemsController(itemsService, $location) {
        var vm = this;

        vm.$onInit = function () {
            vm.items = [];

            itemsService.getAll().then(function (items) {
                vm.items = items;
                vm.sortItems();
            }).catch(function (error) {
                console.log(error)
            });
        };

        vm.switchView = function () {
            vm.initialView = !vm.initialView;
        };

        vm.sortItems = function () {
            vm.neededItems = [];
            vm.availableItems = [];

            vm.items.forEach(function (item) {
                vm.items.selected = false;
                if (item.needed) {
                    vm.neededItems.push(item);
                } else {
                    vm.availableItems.push(item);
                }
                item.needed;
            });
        };
    };

    var asItems = {
        templateUrl: 'App/Items/itemsView.html',
        controller: itemsController,
        controllerAs: 'vm',
    };

    angular.module('app')
        .controller('itemsController', ['itemsService', '$location', itemsController])
        .component('asItems', asItems);
})();