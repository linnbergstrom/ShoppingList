(function () {
    'use strict';
    angular.module('app', ['ngRoute'])
        .config(function ($locationProvider) {
            $locationProvider.hashPrefix('');
        });
})();