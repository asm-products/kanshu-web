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
    
	}]);