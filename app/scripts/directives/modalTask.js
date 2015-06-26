(function (){
    'use strict';

    angular.module('TaskApp').directive('tksModal', function () {
       return {
           restrict : 'E',
           templateUrl : './partials/modalTask.html'
       };
    });
})();