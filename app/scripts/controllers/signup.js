'use strict';

angular.module('kanshuWebApp').controller('SignupCtrl', ['$scope', '$mdDialog', '$location', function SignupCtrl($scope, $mdDialog, $location) {
  $mdDialog.show({
    parent: angular.element(document.body),
    templateUrl: 'views/signupDialog.html',
    controller: 'SignupDialogCtrl'
  }).then(function(){

  }, function(){
  	$location.path('/articles');
  });
}]);
