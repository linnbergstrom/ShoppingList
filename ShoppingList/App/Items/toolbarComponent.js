(function () {
    'use strict';

    function toolbarController($rootScope, sortingService, itemsService) {
        var vm = this;
        vm.showSort;
        vm.selectedItems = [];
        vm.$onInit = function () {
            vm.itemToEdit = '';
            vm.editedTitle = JSON.parse(localStorage.getItem('listMenuExpanded'));
        };

        $rootScope.$on('selectedItemsUpdated', function (arg) {
            vm.selectedItems = vm.items.filter(i => i.selected === true);

            vm.editedTitle = vm.selectedItems[0] && vm.selectedItems[0].title;
        });

        vm.toggleSortMenu = function () {
            vm.showSort = !vm.showSort;
            localStorage.setItem('listMenuExpanded', vm.showSort);
        };

        vm.add = function () {
            vm.updating = true;
            vm.itemsController.addItem(vm.newItemName).then(function () {
                vm.newItemName = '';
                vm.updating = false;
            });
        };

        vm.edit = function () {
            vm.selectedItems[0].title = vm.editedTitle;
            itemsService.updateItem(vm.selectedItems[0]).then(function () {
                vm.updating = false;
            });
        };

        vm.sortOn = function (field) {
            vm.sorting = sortingService.sortOn(field);
        };
    }

    var asToolbar = {
        bindings: {
            showAvailable: '<',
            selectAll: '&',
            items: '<',
            sorting: '='
        },
        require: {
            itemsController: '^^asItems'
        },
        templateUrl: 'App/Items/toolbarView.html',
        controller: toolbarController,
        controllerAs: 'vm'
    };

    angular.module('app')
        .controller('toolbarController', ['$rootScope', 'sortingService', 'itemsService', toolbarController])
        .component('asToolbar', asToolbar);
})();