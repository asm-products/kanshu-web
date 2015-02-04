'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
