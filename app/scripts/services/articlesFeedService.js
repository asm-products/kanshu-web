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
 					article.comments = [
 						{username: "John Smith", comment: "Comment 1", timestamp: "17/4/15"},
 						{username: "Jane Smith", comment: "Comment 2", timestamp: "3/1/15"},
 						{username: "Claire Tang", comment: "This is a greaaaat article", timestamp:"16/12/14"},
 						{username: "Daniel B.", comment: "Tempor ut pork venison t-bone deserunt biltong proident nostrud laboris short ribs elit ea. Laboris ribeye aliquip shoulder ex. ", timestamp: "11/11/14"},
 						{username: "Bob Benson", comment: "Comment 4", timestamp: "9/11/14"}
 						];
 					article.isSelected = false;
 					this.articles.push(article);
 				}
 				this.busy = false;
 			}.bind(this));
 		};

 		return articlesFeedAPI;
 	}]);