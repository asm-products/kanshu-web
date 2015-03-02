'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:articleComment
 * @description
 * # articleComment
 */
angular.module('kanshuWebApp')
  .directive('articleComment', function () {
    return {
      template: '<div><img src="images/user.png" class="userComment"></img><div style="float:none">{{comment}}</div></div>',
      scope: {
      	comment: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
