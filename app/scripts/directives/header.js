(function () {
    'use strict';

    angular.module('TaskApp').directive('tksHeader', function () {
        return {
            restrict : 'E',
            templateUrl : './partials/header.html'
        };
    });
})();