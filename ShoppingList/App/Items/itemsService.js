(function () {
    'use strict';

    angular.module('app')
        .factory('itemsService', ['$http', '$q', itemsService]);

    function itemsService($http, $q) {
        var cachedItems;

        return {
            addNew: addNew,
            deleteItems: deleteItems,
            getAll: getAll,
            refreshItems: refreshItems,
            updateItem: updateItem
        };

        function addNew(name) {
            return getAll().then(function (items) {
                var existsInAvailable = items.available.find(n => n.title.toLowerCase() === name.toLowerCase());
                if (existsInAvailable) {
                    existsInAvailable.needed = true;
                    updateItem(existsInAvailable);
                    return;
                };
                return $http.post('/api/items/', { title: name }).then(function (response) {
                    cachedItems = undefined;
                }).catch(function (error) {
                    return "failed to add item, error: " + error;
                });
            });
        }

        function getAll() {
            if (cachedItems) {
                return $q.resolve(cachedItems);
            }
            return refreshItems();
        }

        function deleteItems(items) {
            cachedItems = undefined;
            return $http.post("/api/items/delete", items).then(function () {
                return getAll();
            });
        }
        function refreshItems() {
            return $http.get('/api/items').then(function (response) {
                cachedItems = response.data;
                return cachedItems;
            }).catch(function (error) {
                console.log(error);
            });
        }

        function updateItem(item) {
            cachedItems = undefined;
            return $http.put('/api/items/' + item.id, item).catch(function (error) {
                return "failed to save update, error: " + error;
            });
        }
    }
})();