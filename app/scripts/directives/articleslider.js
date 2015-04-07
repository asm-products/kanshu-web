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
    restrict: 'E',
    link: (function(scope, elem) {
      var anchor = elem.children()[0];
      var layout = angular.element(elem.children()[1]);
      var layoutHeight = layout[0].getBoundingClientRect().height;
      var initialProperties = {
        position: layout.css('position'),
        bottom: layout.css('bottom'),
        width: layout.css('width')
      };

      var isPinned = false;

      window.addEventListener('scroll', function() {
        calculateScroll(anchor.getBoundingClientRect());
      });

      window.addEventListener('resize', function() {
        var boundingRect = anchor.getBoundingClientRect();
        var newWidth = boundingRect.width;
        initialProperties.width = newWidth;
        layout.css('width', newWidth);
        calculateScroll(boundingRect);
      });

      function calculateScroll(boundingRect) {
        var anchorLine = boundingRect.top - window.innerHeight + (layoutHeight / 3);
        if (anchorLine <= 0) {
          unpin();
        } else {
          pin();
        }
      }

      function pin() {
        if (!isPinned) {
          layout
            .css('position', 'fixed')
            .css('bottom', '0px')
            .css('width', initialProperties.width)
            .css('padding-top', '25px');
          isPinned = true;
        }
      }

      function unpin() {
        if (isPinned) {
          layout
            .css('position', initialProperties.position)
            .css('bottom', initialProperties.bottom)
            .css('width', initialProperties.width)
            .css('padding-top', '0px');
          isPinned = false;
        }
      }
    })
  };
});
