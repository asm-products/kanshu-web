'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('MainCtrl', ['$scope', 'UserService', '$mdDialog',
                  function ($scope, UserService, $mdDialog) {
  	$scope.shouldBeLockedOpen = false;

    $scope.isLoggedIn = false;

  	$scope.toggleSidenav = function() {
  		$scope.shouldBeLockedOpen = !$scope.shouldBeLockedOpen;
  	};

    $scope.login = function(user) {
      $scope.isLoggedIn = UserService.login(user.email, user.password);
    };

    $scope.logout = function() {
      UserService.logout();
      $scope.isLoggedIn = false;
    };

    $scope.showLoginDialog = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/login-dialog.html',
                targetEvent: ev,
                controller: function($scope, $mdDialog) {
                              $scope.submit = function() {
                                  $mdDialog.hide($scope.user);
                              };

                              $scope.cancel = function() {
                                  $mdDialog.cancel();
                              };
                          }
            })
            .then(function(user) {
                $scope.login(user);
            });
        };

  }]);
