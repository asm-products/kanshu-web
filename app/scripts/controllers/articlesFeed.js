'use strict';

/**
 * @ngdoc function
 * @name webApp.controller: ArticlesFeedController
 * @description
 * # ArticlesFeedController
 * Controller of the articles feed.
 */
angular.module('webApp')
	.controller('ArticlesFeedController', function ($scope, ArticlesFeedService) {

		$scope.data = [];

		ArticlesFeedService.getArticles().success(function (data) {
			$scope.feed = {
				articles: data
			};
		})
		.error(function (data) {
			console.error('Error fetching feed:', data);
		});

	});
