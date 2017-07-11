(function () {
    'use strict';

    function toolbarController(sortingService, itemsService) {
        var vm = this;
        vm.showSort;
        vm.$onInit = function () {
            vm.showSort = JSON.parse(localStorage.getItem('listMenuExpanded'));
        };

        vm.toggleSortMenu = function () {
            vm.showSort = !vm.showSort;
            localStorage.setItem('listMenuExpanded', vm.showSort);
        }

        vm.add = function () {
            if (vm.newItemName == '') {
                return;
            }
            vm.updating = true;
            itemsService.addNew(vm.newItemName).then(function () {
                vm.newItemName = '';
                vm.updating = false;
            });
        };

        vm.sortOn = function (field) {
            vm.sorting = sortingService.sortOn(field);
        };
        vm.deleteItems = function () {
            itemsService.deleteItems(vm.selectedItems);
        };
    };

    var asToolbar = {
        bindings: {
            allSelected: '<',
            header: '<',
            selectAll: '&',
            selectedItems: '<',
            sorting: '='
        },
        require: {
            itemsController: '^^asItems'
        },
        templateUrl: 'App/Items/toolbarView.html',
        controller: toolbarController,
        controllerAs: 'vm',
    }

    angular.module('app')
        .controller('toolbarController', ['sortingService', 'itemsService', toolbarController])
        .component('asToolbar', asToolbar);
})();