'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('MainCtrl', ['$scope', 'UserService', '$mdDialog', '$rootScope',
                  function ($scope, UserService, $mdDialog, $rootScope) {
  	$scope.shouldBeLockedOpen = false;

    $scope.isLoggedIn = false;

  	$scope.toggleSidenav = function() {
  		$scope.shouldBeLockedOpen = !$scope.shouldBeLockedOpen;
  	};

    $scope.login = function(user) {
      $scope.isLoggedIn = UserService.login(user.email, user.password);
      return $scope.isLoggedIn;
    };


    $scope.logout = function() {
      UserService.logout();
      $scope.isLoggedIn = false;
    };

    $scope.showLoginDialog = function($oscope, ev) {
            $mdDialog.show({
                templateUrl: 'views/login-dialog.html',
                targetEvent: ev,
                controller: function($scope, $mdDialog) {
                              $scope.submit = function() {
                                  if ($oscope.login($scope.user)) {
                                    $mdDialog.hide($scope.user);
                                  } else {
                                    console.log('Login error');
                                  }
                              };

                              $scope.cancel = function() {
                                  $mdDialog.cancel();
                              };
                          }
            });
        };

  $rootScope.showLoginDialog = $scope.showLoginDialog;
  }
]);
