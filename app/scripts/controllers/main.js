'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('MainCtrl', ['$scope', '$location', '$cookieStore','UserService','$mdDialog', '$rootScope',
                  function ($scope, $location, $cookieStore, UserService, $mdDialog, $rootScope) {
                      $scope.shouldBeLockedOpen = false;
                      $scope.accountMenu = {};
                      $scope.accountMenu.visible = false;

    $scope.isLoggedIn = false;

  	$scope.toggleSidenav = function() {
  		$scope.shouldBeLockedOpen = !$scope.shouldBeLockedOpen;
  	};

  	$scope.goTo = function (viewName) {
  	    $location.path(viewName);
  	};

  	$scope.login = function (user) {
  	  user.accountData = {};
  	  $scope.isLoggedIn = UserService.login(user.email, user.password);
  	  user.accountData = UserService.getCurrentUser();
  	  var expireDate = new Date();
  	  expireDate = new Date(expireDate.getTime() + 2 * 60 * 60 * 1000); //replace with actual expiration value of the session
  	  $cookieStore.put("kanshu_sessionId", "yourSessionIdHere", { 'expires': expireDate });
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
                                      $oscope.user = $scope.user;
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

    $scope.showUserMenu = function () {
        $scope.accountMenu.visible = !$scope.accountMenu.visible
    }
  $rootScope.showLoginDialog = $scope.showLoginDialog;
  }
]);
