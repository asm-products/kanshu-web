'use strict'; 

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
 angular.module('webApp.services', [])
 	.factory('ArticlesFeedService', function ($http) {

 		var articlesFeedAPI = {};

 		articlesFeedAPI.getArticles = function() {
 			return $http({
 				method: 'GET',
 				url: 'http://baconipsum.com/api/?type=meat-and-filler'
 			});
 		};

 		return articlesFeedAPI;
 	});