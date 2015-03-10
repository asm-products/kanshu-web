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
      template: '<div class="commentUser"><img src="images/user.png" class="commentUserImage"></img></div>' +
                  '<div class="commentContent">' + 
                    '<span>{{comment.username}}</span> <span class="right">{{comment.timestamp}}</span>' + 
                    '<p>{{comment.comment}}</p>' +
                  '</div>',
      scope: {
      	comment: '='
      },
      restrict: 'E'
    };
  });
