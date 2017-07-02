(function () {
    'use strict';
    angular.module('app', ['ngRoute', 'ngAnimate'])
        .config(function ($locationProvider) {
            $locationProvider.hashPrefix('');
        });
})();