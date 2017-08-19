(function () {
    'use strict';
    angular.module('app', ['ngRoute', 'ngAnimate', 'ngMessages'])
        .config(function ($locationProvider) {
            $locationProvider.hashPrefix('');
        });
})();