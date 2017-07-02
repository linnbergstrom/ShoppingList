(function () {
    'use strict';

    function toolbarController(sortingService) {
        var vm = this;
        vm.showSort;
        vm.$onInit = function () {
            vm.showSort = JSON.parse(localStorage.getItem('listMenuExpanded'));

        };

        vm.toggleSortMenu = function () {
            vm.showSort = !vm.showSort;
            localStorage.setItem('listMenuExpanded', vm.showSort);
        }

        vm.add = function (item) {
            var index = vm.items.length + 2;
            itemsService.addNew(item);
        };

        vm.sortOn = function (field) {
            vm.sorting = sortingService.sortOn(field);
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
        .controller('toolbarController', ['sortingService', toolbarController])
        .component('asToolbar', asToolbar);
})();