'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('MainCtrl', function ($scope, $mdSidenav) {
  	$scope.toggleSidenav = function() {
  		$mdSidenav('left').toggle();
  	};
  });
