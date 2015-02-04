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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
