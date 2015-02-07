'use strict';

/**
 * @ngdoc directive
 * @name kanshuWebApp.directive:dictionaryPopover
 * @description
 * # dictionaryPopover
 */
angular.module('kanshuWebApp')
  .directive('dictionaryPopover', function () {
    return {
      template: '<div id="dictionaryPopover">{{dictionaryPopover.entry}}</div><div id="popoverTriangle1"></div><div id="popoverTriangle2"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.$watch("dictionaryPopover.position", function(newValue){
      		console.log(element);
      		$("#dictionaryPopover").css('left', scope.dictionaryPopover.position.left);
     		$("#dictionaryPopover").css('top', scope.dictionaryPopover.position.top);    
      		$("#popoverTriangle1").css('left', scope.dictionaryPopover.position.triangleLeft1);
      		$("#popoverTriangle1").css('top', scope.dictionaryPopover.position.triangleTop);
      		$("#popoverTriangle2").css('left', scope.dictionaryPopover.position.triangleLeft2);
      		$("#popoverTriangle2").css('top', scope.dictionaryPopover.position.triangleTop);
      	});

      	scope.$watch("dictionaryPopover.visible", function(newValue){
      		console.log('visible ' + newValue);
      		if(newValue){
      			$("#dictionaryPopover").css('display', 'block');
      			$("#popoverTriangle1").css('display', 'block');
      			$("#popoverTriangle2").css('display', 'block');
      		}else{
      		    $("#dictionaryPopover").css('display', 'none');
      		    $("#popoverTriangle1").css('display', 'none');
      		    $("#popoverTriangle2").css('display', 'none');
      		}
      	});
      }
    };
  });
