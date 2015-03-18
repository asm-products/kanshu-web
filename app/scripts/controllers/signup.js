'use strict';

angular.module('kanshuWebApp').controller('SignupCtrl', function SignupCtrl($scope, $mdDialog, $location) {
  $mdDialog.show({
    parent: angular.element(document.body),
    templateUrl: 'views/signupDialog.html',
    controller: 'SignupDialogCtrl'
  }).then(function(){

  }, function(){
  	$location.path('/articles');
  });
});
