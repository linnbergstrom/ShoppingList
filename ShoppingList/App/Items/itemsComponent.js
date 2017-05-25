(function () {
    'use strict';

    function itemsController(itemsService) {
        var vm = this;

        vm.$onInit = function () {
            vm.items = [];
            vm.selectedItems = [];

            itemsService.getAll().then(function (items) {
                sortItems(items);
            }).catch(function (error) {
                console.log(error)
            });
        };

        vm.toggle = function (item) {
            if (item.needed) {
                item.frequency++;
            }
            item.needed = !item.needed;
            sortItems(vm.items);
            itemsService.updateItem(item);
        };

        vm.setSelected = function (item) {
            if (item.selected) {
                item.selected = true;
                vm.selectedItems.push(item);
            } else {
                item.selected = false;
                vm.selectedItems.pop(item);
            }
        }

        vm.addNew = function () {
            var index = vm.items.length + 2;
            itemsService.addNew(vm.newItemName);
        };

        vm.delete = function () {
            itemService.delete(vm.selectedItems);
        };

        function sortItems(items) {
            vm.neededItems = [];
            vm.availableItems = [];

            items.forEach(function (item) {
                items.selected = false;
                if (item.needed) {
                    vm.neededItems.push(item);
                } else {
                    vm.availableItems.push(item);
                }
                item.needed;
            });
        }
    };

    var slItems = {
        //bindings: {
        //    items: '<'
        //},
        templateUrl: 'App/Items/itemsView.html',
        controller: itemsController,
        controllerAs: 'vm',
    }

    angular.module('app')
        .controller('itemsController', ['itemsService', itemsController])
        .component('slItems', slItems);

    //.config(function ($stateProvider) {
    //    $stateProvider
    //        .state('Item', {
    //            url: '/items',
    //            component: 'slItems',
    //            resolve: {
    //                items: function (itemsService) {
    //                    return itemsService.getAll();
    //                }
    //            }
    //        });
    //});
})();