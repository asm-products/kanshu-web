'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:accountMenu
 * @description
 * # accountMenu
 */
angular.module('kanshuWebApp')
  .directive('accountMenu', function () {
      return {
          template: '<div id="accountMenu"><div ng-click="goTo(\'account\')">My Account</div><div>Sign out</div></div><div id="menuTriangle1"></div><div id="menuTriangle2"></div>',
          restrict: 'E',
          link: function postLink(scope) {
              var $ = angular.element;

              scope.$watch("accountMenu.visible", function (newValue) {
                  if (newValue) {
                      $("#accountMenu").css('display', 'block');
                      $("#menuTriangle1").css('display', 'block');
                      $("#menuTriangle2").css('display', 'block');
                  } else {
                      $("#accountMenu").css('display', 'none');
                      $("#menuTriangle1").css('display', 'none');
                      $("#menuTriangle2").css('display', 'none');
                  }
              });
          }
      };
  });