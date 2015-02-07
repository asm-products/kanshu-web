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
      	dictionaryPopover: '='
      },
      link: function postLink(scope, element, attrs) {
        element.on('mouseenter', function () {
        	element.css('background-color', 'yellow');
        	var rect = element[0].getBoundingClientRect()
        	console.log(rect);

        	if(scope.phrase[0] == 'punc: '){
        		scope.dictionaryPopover.entry = '';
                scope.$apply();
		
        	}else{
        		scope.dictionaryPopover.entry = scope.phrase[4];
        		scope.$apply();

	        	$("#dictionaryPopover").css('left', rect.left);

	        	var popoverHeight = $("#dictionaryPopover").outerHeight();
	        	var top = rect.top - popoverHeight;
	    		$("#dictionaryPopover").css('top', top - 8);
	    		$("#dictionaryPopover").css('display', 'block');
	    		

	    		var triangleLeft = Math.max($("#viewContainer").offset().left + 10, rect.left + rect.width/2 - 20);    
		
			    $("#popoverTriangle1").css('left', triangleLeft);
			    $("#popoverTriangle2").css('left', triangleLeft + 15);
			    $("#popoverTriangle1").css('top', top + popoverHeight - 8);
			    $("#popoverTriangle2").css('top', top + popoverHeight - 8);
			    $("#popoverTriangle1").css('display', 'block');
			    $("#popoverTriangle2").css('display', 'block'); 
        	}

        });
        element.on('mouseleave', function () {
            element.css('background-color', 'white');
		   	$("#dictionaryPopover").css('display', 'none');
		    $("#popoverTriangle1").css('display', 'none');
		    $("#popoverTriangle2").css('display', 'none');            
        });
      }
    };
  });
