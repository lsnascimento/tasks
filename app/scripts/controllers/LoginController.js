(function() {
    'use strict';
    
    angular.module('TaskApp').controller('LoginController', ['$scope', '$location', function ($scope, $location) {
        
        // Variáveis
        $scope.iUser = {
            email : 'leonardo@email.com',
            password : '123456'
        };
        
        // Global Functions
        $scope.validateUser = function () {
            if($scope.user.email === $scope.iUser.email && $scope.user.password === $scope.iUser.password){
                $location.path('home');
            }else{
                toastr.error('Usuário ou senha inválidos!', 'Erro');
            }
        };
        
        // Local Functions
    }]);
})();