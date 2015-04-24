'use strict';

angular.module('checklist')
.factory('Task', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  var fbTasks;
  var afTasks;

  console.info('I am a task model');

  function init(){
    fbTasks = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/tasks');
    afTasks = $firebaseArray(fbTasks);
  }

  function add(task){
    return afTasks.$add(task);
  }

  return {add: add, init: init};
}]);
