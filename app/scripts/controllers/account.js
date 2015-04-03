'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp: AccountController
 * @description
 * # AccountCtrl
 * Controller for user's account page.
 */
angular.module('kanshuWebApp')
	.controller('AccountCtrl', ['$scope', 'UserService',  function ($scope, UserService) {
	    $scope.user = {};
	    $scope.user.accountData = UserService.getCurrentUser();
	    $scope.user.userMetrics = UserService.getUserMetrics();

	}]);