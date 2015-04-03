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
    'kanshuWebApp.services',
    'ngMaterial',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/articlesFeed.html',
        controller: 'ArticlesFeedCtrl'
      })
      .when('/article', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
        .when('/account',
      {
          templateUrl: 'views/account.html',
          controller: 'AccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    var kanshuRedMap = $mdThemingProvider.extendPalette('red', {
    '50' : 'ffffff',
    '500': 'e75f5b'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('kanshuRed', kanshuRedMap);  
    $mdThemingProvider.theme('default')
      .primaryPalette('kanshuRed', {
        'default': '50',
        'hue-1': '500'
      })
      .accentPalette('red');
  });
