angular.module('kanshuWebApp').controller('SignupDialogCtrl', function SignupDialogCtrl($scope, $mdDialog) {
  $scope.user = {};
  $scope.signUp = function signUp() {
    $mdDialog.hide();
  };
});

