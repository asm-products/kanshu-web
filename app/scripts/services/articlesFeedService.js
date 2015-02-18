'use strict'; 

/**
 * @ngdoc function
 * @name kanshuWebApp.services: ArticlesFeedService
 * @description
 * # ArticlesFeedService
 * Service of the kanshuWebApp to get articles from server.
 */
 angular.module('kanshuWebApp.services', [])
 	.factory('ArticlesFeedService', ['$http', function ($http) {

 		var articlesFeedAPI = {};

 		articlesFeedAPI.getArticles = function() {
 			return $http({
 				method: 'GET',
 				url: 'http://baconipsum.com/api/?type=meat-and-filler'
 			});
 		};

 		return articlesFeedAPI;
 	}]);