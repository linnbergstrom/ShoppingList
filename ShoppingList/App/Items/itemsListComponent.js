(function () {
    'use strict';

    function itemsListController(itemsService, sortingService) {
        var vm = this;

        vm.selectedItems = [];
        vm.sortedDesc = true;
        vm.sorting = sortingService.sorting();

        vm.setSelected = function (item) {
            if (!item.selected) {
                item.selected = true;
                vm.selectedItems.push(item);
            } else {
                item.selected = false;
                vm.selectedItems.pop(item);
            }
            vm.allSelected = vm.items.length === vm.selectedItems.length;
        };

        vm.selectAll = function () {
            if (vm.allSelected) {
                vm.selectedItems = [];
                vm.allSelected = false;
                selectSwitcher(vm.items);
            } else {
                vm.allSelected = true;
                vm.selectedItems = selectSwitcher(vm.items);
            }
            //vm.selectedItems = vm.items.map(function (item) {
            //    item.selected = vm.allSelected;
            //    return item;
            //});
        };

        function selectSwitcher(items) {
            return items.map(function (item) {
                item.selected = vm.allSelected;
                return item;
            });
        };

        vm.confirmItem = function (item) {
            if (item.needed) {
                item.frequency++;
            }
            item.needed = !item.needed;
            itemsService.updateItem(item);
            vm.itemsController.sortItems();
        };

        vm.delete = function () {
            itemService.delete(vm.selectedItems);
            vm.selectedItems = [];
        };
    };

    var asItemsList = {
        bindings: {
            items: '<',
            sorting: '<',
            header: '@'
        },
        require: {
            itemsController: '^^asItems'
        },
        templateUrl: 'App/Items/itemsListView.html',
        controller: itemsListController,
        controllerAs: 'vm',
    }

    angular.module('app')
        .controller('itemsListController', ['itemsService', 'sortingService', itemsListController])
        .component('asItemsList', asItemsList);
})();