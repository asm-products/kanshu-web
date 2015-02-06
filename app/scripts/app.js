'use strict';

/**
 * @ngdoc overview
 * @name kanshWebApp
 * @description
 * # kanshuWebApp
 *
 * Main module of the application.
 */
angular
  .module('kanshuWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'kanshuWebApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/articles', {
        templateUrl: 'views/articlesFeed.html',
        controller: 'ArticlesFeedCtrl'
      })
      .when('/article', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
