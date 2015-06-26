(function () {
    'use strict';

    angular.module('TaskApp').config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/views/login.html',
                controller  : 'LoginController'
            })
            .when('/home', {
                templateUrl : '/views/home.html',
                controller  : 'HomeController',
                authorize : true
            })
            .when('/tarefa', {
                templateUrl : '/views/task.html',
                controller  : 'TaskController',
                authorize : true
            })
            .otherwise({
                templateUrl : '/views/404.html'
            });
    }]);
})();