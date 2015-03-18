'use strict';

angular.module('kanshuWebApp').controller('SignupDialogCtrl', function SignupDialogCtrl($scope, $mdDialog, $rootScope, UserService) {
  $scope.user = {};
  $scope.showLoginDialog = $rootScope.showLoginDialog;
  $scope.signUp = function signUp() {
    if(!$scope.signupForm.$valid) { return; }
    UserService.signUp(function signupCallback() {
      $mdDialog.hide();
    });
  };
});

