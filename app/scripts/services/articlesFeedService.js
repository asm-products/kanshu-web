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

 		var articlesFeedAPI = function(){
 			this.articles = [];
 			this.busy = false;
 		};

 		articlesFeedAPI.prototype.getArticles = function() {
 			if(this.busy){
 				return;
 			}
 			this.busy = true;

 			$http({
 				method: 'GET',
 				url: 'http://baconipsum.com/api/?type=meat-and-filler'
 			}).success(function(articles){
 				for(var i = 0; i < articles.length; i++){
 					var article = {};
 					article.content = articles[i];
 					article.hearts = Math.floor(Math.random() * 10);
 					article.comments = Math.floor(Math.random() * 10);
 					article.isSelected = false;
 					this.articles.push(article);
 				}
 				this.busy = false;
 			}.bind(this));
 		};

 		return articlesFeedAPI;
 	}]);