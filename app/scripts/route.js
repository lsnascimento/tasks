(function () {
    'use strict';

    angular.module('TaskApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/views/home.html',
                controller  : 'HomeController'
            })
            .when('/tarefa', {
                templateUrl : '/views/task.html',
                controller  : 'TaskController'
            })
            .otherwise({
                templateUrl : '/views/404.html'
            });
    }]);
})();