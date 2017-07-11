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
            updateItem: updateItem,
        };

        function getAll() {
            if (cachedItems) {
                return $q.resolve(cachedItems);
            }
            return refreshItems();
        }

        function deleteItems(items) {
            //   return $http.delete("/api/items");
            cachedItems = cachedItems.filter(item => !items.includes(item));
            return cachedItems;
            //  }
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
            return $http.put('/api/items/' + item.id, item).then(function (response) {
                return refreshItems();
            }).catch(function (error) {
                return "failed to save update, error: " + error;
            })
        }

        function addNew(name) {
            return $http.post('/api/items/', { title: name }).then(function (response) {
                return refreshItems();
            }).catch(function (error) {
                return "failed to add item, error: " + error;
            })
        }
    }
})();