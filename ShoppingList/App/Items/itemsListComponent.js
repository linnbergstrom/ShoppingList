﻿(function () {
    'use strict';

    function itemsListController($rootScope, itemsService) {
        var vm = this;

        vm.sortedDesc = true;
        vm.$onInit = function () {
            vm.selectedItems = [];
        };

        vm.setSelected = function ($event, item) {
            item.selected = !item.selected;
            vm.allSelected = vm.items.length === vm.selectedItems.length;
            $rootScope.$broadcast('selectedItemsUpdated');
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
        };

        function selectSwitcher(items) {
            return items.map(function (item) {
                item.selected = vm.allSelected;
                return item;
            });
        }

        vm.confirmItem = function ($event, item) {
            if (item.needed) {
                item.frequency++;
            }
            item.needed = !item.needed;
            itemsService.updateItem(item).then(function () {
                vm.itemsController.getItems();
            });
            $event.stopPropagation();
        };

        vm.delete = function () {
            itemService.delete(vm.selectedItems);
            vm.selectedItems = [];
        };
    }

    var asItemsList = {
        bindings: {
            items: '<',
            selectedItems: '='
        },
        require: {
            itemsController: '^^asItems'
        },
        templateUrl: 'App/Items/itemsListView.html',
        controller: itemsListController,
        controllerAs: 'vm'
    };

    angular.module('app')
        .controller('itemsListController', ['$rootScope', 'itemsService', itemsListController])
        .component('asItemsList', asItemsList);
})();