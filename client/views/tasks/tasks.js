'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){

  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    var date  = task.dueDate.getTime();
    task.dueDate = date;
    Task.add(o)
    .then(function(data){
      console.info('data', data);
    });
  };
}]);
