'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp: ArticlesFeedController
 * @description
 * # ArticlesFeedCtrl
 * Controller of the articles feed.
 */
angular.module('kanshuWebApp')
	.controller('ArticlesFeedCtrl', function ($scope, ArticlesFeedService) {

		$scope.feed = ['Initialize the feed'];

		ArticlesFeedService.getArticles().success(function (data) {
			$scope.feed = {
				articles: data,
			};
		})
		.error(function (data) {
			console.error('Error fetching feed:', data);
		});

	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    
	});