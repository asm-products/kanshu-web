'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:LeftsidenavCtrl
 * @description
 * # LeftsidenavCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('LeftSidenavCtrl', ['$scope', 'TopicsService', function ($scope, TopicsService) {
    $scope.rows = [
    	[{"src": "images/ic_poll_48px.svg",
    	"text": "Topics",
        "type": "toggle",
        "onClick": function(){
            $scope.showingTopics = !$scope.showingTopics;
        }}],
    	[{"src": "images/ic_extension_black_48dp.png",
    	"text": "Add Ons"},
    	{"src": "images/ic_settings_black_48dp.png",
    	"text": "Upgrade"}],
    	[{"src": "images/ic_help_black_48dp.png",
    	"text": "Help"},
    	{"src": "images/kanshu_about_gray.png",
    	"text": "About"}],
    ];

    $scope.showingTopics = false;

    $scope.topicsChanged = TopicsService.topicsChanged;

    $scope.getTopics = TopicsService.getTopics;

   
  }]);
