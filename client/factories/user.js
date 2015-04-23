'use strict';

angular.module('checklist')
.factory('User', ['$rootScope', function($rootScope){
  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }

  return {register: register};
}]);
