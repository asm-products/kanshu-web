'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp: ArticlesFeedController
 * @description
 * # ArticlesFeedCtrl
 * Controller of the articles feed.
 */
angular.module('kanshuWebApp')
	.controller('ArticlesFeedCtrl', ['$scope', 'ArticlesFeedService', function ($scope, ArticlesFeedService) {

		$scope.feed = new ArticlesFeedService();

		$scope.openComments = function(item){
			item.isSelected = true;
			$scope.itemSelected = item;
			$scope.itemIsSelected = true;
		}
    	
    	$scope.closeComments = function(){
    		$scope.itemSelected.isSelected = false;
    		$scope.itemSelected = null;
    		$scope.itemIsSelected = false;
    	}

	}]);