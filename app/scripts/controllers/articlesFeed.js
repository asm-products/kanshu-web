'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp: ArticlesFeedController
 * @description
 * # ArticlesFeedCtrl
 * Controller of the articles feed.
 */
angular.module('kanshuWebApp')
	.controller('ArticlesFeedCtrl', ['$scope', '$mdDialog', 'ArticlesFeedService', function ($scope, $mdDialog, ArticlesFeedService) {

		$scope.feed = new ArticlesFeedService();

    	$scope.showSelectedArticle = function(ev, item1) {
	    	$mdDialog.show({
	      		controller: DialogController,
	      		templateUrl: 'views/articleDetail.html',
	      		targetEvent: ev,
	      		locals: {item : item1}
	    	});
	  	};

	  	function DialogController($scope, item) {
	  		$scope.item = item;
		}

	}]);