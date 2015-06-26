(function () {
    'use strict';

    angular.module('TaskApp').controller('TaskController', ['$scope', function ($scope) {

        // Variaveis

        $scope.dateNow = new Date().getTime();

        $scope.task = {
            'id'   : 0,
            'name' : '',
            'date' : new Date().getTime(),
            'done' : false,
            'solution' : ''
        };

        $scope.tasks = [];
        //$scope.disableRadioTasks = [];

        // Global Functions

        $scope.addTask = function () {
            $scope.task.id = $scope.tasks.length + 1;
            $scope.task.name = $scope.iTask.name;
            $scope.tasks.push($scope.task);
            $scope.taskForm.$setPristine();
            toastr.success('Tarefa criada!', 'Sucesso!');

            delete $scope.iTask;
            resetTask();
        };

        $scope.isFinalized = function () {
            return $scope.tasks.some(function(val) {
                return val.done === true;
            });
        };

        $scope.setTaskDone = function (data) {
            data.done = !data.done;
            $scope.task = data;
        };

        $scope.taskAnswerFalse = function () {
            $scope.task.done = false;
            $scope.task.solution = '';
            $scope.solutionForm.$setPristine();
            resetTask();
        };

        $scope.taskAnswerTrue = function () {
            $scope.disableRadioTasks = [];

            $scope.tasks.map(function (val) {
                $scope.disableRadioTasks.push(val.done);
            });

            $scope.solutionForm.$setPristine();

            $('#myModal').modal('hide');

            resetTask();
        };


        // Local Functions

        function resetTask () {
            $scope.task = {
                'id'   : 0,
                'name' : '',
                'date' : new Date().getTime(),
                'done' : false,
                'solution' : ''
            };
        }

    }]);
})();