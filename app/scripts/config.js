(function () {
    'use strict';
    
    angular.module('TaskApp').run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.isAuthenticated = true; 
        
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
           if(next.authorize && !$rootScope.isAuthenticated){
               $location.path('/');
           }
        });
    }]);
})();