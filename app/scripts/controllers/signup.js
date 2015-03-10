angular.module('kanshuWebApp').controller('SignupCtrl', function SignupCtrl($scope, $mdDialog) {
  $mdDialog.show({
    parent: angular.element(document.body),
    templateUrl: 'views/signupDialog.html',
    controller: 'SignupDialogCtrl'
  });
});
