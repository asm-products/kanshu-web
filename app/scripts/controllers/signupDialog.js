'use strict';

angular.module('kanshuWebApp').controller('SignupDialogCtrl', ['$scope', '$mdDialog', '$rootScope', '$location', 'UserService', function SignupDialogCtrl($scope, $mdDialog, $rootScope, $location, UserService) {
  $scope.user = {};
  $scope.showLoginDialog = $rootScope.showLoginDialog;
  $scope.signUp = function signUp() {
    if(!$scope.signupForm.$valid) { return; }
    UserService.signUp($scope.user, function signupCallback() {
      console.log("Signup Successful");
      $location.path('/articles');
      $mdDialog.hide();
    });
  };
}]);

