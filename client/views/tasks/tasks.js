'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){

  $scope.afTasks = Task.init();
  $scope.editingTask = false;

  console.info('I am a task controller');

  $scope.addTask = function(task){
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };
    Task.add(o)
    .then(function(){
      $scope.task = {};
    });
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
  };

  $scope.saveTask = function(task){
    if($scope.editingTask){
      task.dueDate = task.dueDate.getTime();
      $scope.task = {};
      $scope.editingTask = false;
    }
    Task.save(task);
  };

  $scope.editTask = function(task){
    var o = task;
    o.dueDate = new Date(task.dueDate);
    $scope.task = o;
    $scope.editingTask = true;
  };

}]);
