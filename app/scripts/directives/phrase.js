'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:phrase
 * @description
 * # phrase
 */
angular.module('kanshuWebApp')
  .directive('dirPhrase', function () {
    return {
      template: "<span class='punc'>{{phrase[0] == 'punc: ' ? '' : phrase[2]}}</span><p class='hanzi'>{{phrase[0] == 'punc: ' ? phrase[1][0] : phrase[0]}}</p>",
      restrict: 'A',
      scope: {
      	phrase: '=p'
      },
      link: function postLink(scope, element, attrs) {
        console.log(scope);
      }
    };
  });
