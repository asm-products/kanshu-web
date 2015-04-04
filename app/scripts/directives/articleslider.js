'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:articleslider
 * @description
 * # articleslider
 */
angular.module('kanshuWebApp').directive('articleSlider', function () {
  return {
    templateUrl: '../../views/slider.html',
    restrict: 'E'
  };
});
