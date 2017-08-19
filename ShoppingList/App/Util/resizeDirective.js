(function () {
    'use strict'
    angular.module('app')
        .directive('slResize', ['$window', function ($window) {
            return {
                restrict: 'A',
                scope: {
                    slResize: '&'
                },
                link: link
            };

            function link(scope, elem, attrs, ctrl) {
                onResize();
               return angular.element($window).on('resize', function () {
                   onResize();
                });

               function onResize() {
                   scope.slResize({ width: $window.innerWidth });
               }
            };
        }]);
})();