'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', function($scope, User){
  console.info('UsersCtrl is loaded');

  $scope.submit = function(user){
    User.register(user)
    .then(function(data){
      console.info(data);
    })
    .catch(function(err){
      console.error(err);
    });
  };
}]);
