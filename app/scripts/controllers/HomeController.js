(function () {
    'use strict';

    angular.module('TaskApp').controller('HomeController', ['$rootScope', function ($rootScope) {
        $rootScope.isAuthenticated = true;
    }]);
})();