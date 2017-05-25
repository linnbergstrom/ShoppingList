(function () {
    'use strict';

    angular.module('app')
        .factory('itemsService', ['$http', itemsService]);

    function itemsService($http) {

        return {
            getAll: getAll,
            updateItem: updateItem,
            addNew: addNew
        };

        function getAll() {
            return $http.get('/api/items').then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

        function updateItem(item) {
            return $http.put('/api/items/' + item.id, item).then(function (response) {
                return "success";
            }).catch(function (error) {
                return "failed to save update, error: " + error;
            })
        }

        function addNew(name) {
            return $http.post('/api/items/', { title: name }).then(function (response) {
                return "success";
            }).catch(function (error) {
                return "failed to add item, error: " + error;
            })
        }
    }
})();