'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.shouldBeLockedOpen = false;

  	$scope.toggleSidenav = function() {
  		$scope.shouldBeLockedOpen = !$scope.shouldBeLockedOpen;
  	};


  });
