'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:articleslider
 * @description
 * # articleslider
 */
angular.module('kanshuWebApp').directive('articleSlider', function () {
  return {
    template: 'wǒ <md-slider md-discrete ng-model="articleLevel.hsk" min="0" max="7"></md-slider>{{articleLevel.hsk}} 我',
    restrict: 'E'
  };
});
