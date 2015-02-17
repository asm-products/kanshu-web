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
      templateUrl: '../../views/phrase.html',
      restrict: 'A',
      scope: {
      	phrase: '=p',
      	showingInlineDefinitions: '=',
      	dictionaryPopover: '=',
      },
      link: function postLink(scope, element, attrs) {
        element.on('mouseenter', function () {
        	var rect = element[0].getBoundingClientRect()

        	if(scope.phrase.type == 'punctuation'){
        		scope.dictionaryPopover.entry = '';
                scope.$apply();
        	}else{
        		scope.dictionaryPopover.entry = scope.phrase.definitions[0];
        		scope.$apply();

	        	var popoverHeight = $("#dictionaryPopover").outerHeight();
	        	var top = rect.top - popoverHeight + $(window).scrollTop();
	    		var left = rect.left;
				var triangleLeft = Math.max($("#viewContainer").offset().left + 10, rect.left + rect.width/2 - 20);    
		
        		scope.dictionaryPopover.position = {"top": top - 8, "triangleTop": top + popoverHeight -8, "triangleLeft1": triangleLeft, "triangleLeft2": triangleLeft + 15, "left": left, "popoverHeight": popoverHeight};
        		scope.dictionaryPopover.visible = true;
        		scope.$apply();
        	}

        });
        element.on('mouseleave', function () {
			scope.dictionaryPopover.visible = false;   
			scope.$apply();      
        });
      }
    };
  });
