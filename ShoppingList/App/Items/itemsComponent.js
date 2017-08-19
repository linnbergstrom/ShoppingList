(function () {
    'use strict';

    function itemsController(itemsService, sortingService, $location) {
        var vm = this;

        vm.$onInit = function () {
            vm.selectedItems = [];
            vm.sorting = sortingService.sorting();

            vm.getItems();
        };

        vm.getItems = function () {
            itemsService.getAll().then(function (items) {
                if (vm.showAvailable) {
                    vm.items = items.available;
                } else {
                    vm.items = items.needed;
                }
            }).catch(function (error) {
                console.log(error);
            });
        };

        vm.addItem = function (name) {
            return itemsService.addNew(name).then(function () {
                vm.getItems();
            });
        };

        vm.onResize = function (width) {
            vm.wideScreen = width > 1200;
        };

        vm.switchView = function () {
            vm.selectedItems = [];
            vm.showAvailable = !vm.showAvailable;
            vm.getItems();
        };

        vm.deleteItems = function (selected) {
            itemsService.deleteItems(itemIds(selected.items)).then(function () {
                vm.getItems();
            });
        };

        function itemIds(items) {
            return items.map((item) => { return item.id; });
        }
    }

    var asItems = {
        templateUrl: 'App/Items/itemsView.html',
        controller: itemsController,
        controllerAs: 'vm'
    };

    angular.module('app')
        .controller('itemsController', ['itemsService', 'sortingService', '$location', itemsController])
        .component('asItems', asItems);
})();