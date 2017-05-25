(function () {
    'use strict';

    function itemsListController() {
        var vm = this;
        vm.reverse = true;
        vm.sortedOn = 'frequency';

        vm.sortOn = function (field) {
            vm.sortedOn = field;
            vm.reverse = !vm.reverse;
        };

        vm.toggle = function (item) {
            onToggle({ item });
        }

        vm.setSelected = function (item) {
            vm.itemsController.setSelected(item);
        };
    };

    var slitemsList = {
        bindings: {
            items: '<',
            onToggle: '&'
        },
        require: {
            itemsController: '^^slItems'
        },
        templateUrl: 'App/Items/itemsListView.html',
        controller: itemsListController,
        controllerAs: 'vm',
    }

    angular.module('app')
        .controller('itemsListController', [itemsListController])
        .component('slItemsList', slitemsList);
})();