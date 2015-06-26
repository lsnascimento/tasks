(function () {
    'use strict';

    angular.module('TaskApp').directive('tksHeader', function () {
        return {
            restrict : 'E',
            scope : {
                label : '@'
            },
            templateUrl : './partials/header.html'
        };
    });
})();