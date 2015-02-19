'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:LeftsidenavCtrl
 * @description
 * # LeftsidenavCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('LeftSidenavCtrl', ['$scope', function ($scope) {
    $scope.rows = [
    	[{"src": "images/ic_poll_48px.svg",
    	"text": "Topics",
        "type": "toggle",
        "onClick": function(){
            $scope.showingTopics = !$scope.showingTopics;
        }}],
    	[{"src": "images/ic_extension_black_48dp.png",
    	"text": "Add Ons"}],
    	[{"src": "images/ic_settings_black_48dp.png",
    	"text": "Upgrade"}],
    	[{"src": "images/ic_help_black_48dp.png",
    	"text": "Help"}],
    	[{"src": "images/kanshu_about_gray.png",
    	"text": "About"}],
    ];

    $scope.showingTopics = false;

    $scope.topics = [
        {"topic": "China", 
        "checked": true},
        {"topic": "Travel", 
        "checked": true},
        {"topic": "News and Politics", 
        "checked": true},
        {"topic": "Sports", 
        "checked": true},
        {"topic": "Games", 
        "checked": true},
        {"topic": "Humor", 
        "checked": true},
        {"topic": "Science and Technology",
        "checked": true},
        {"topic": "Finance and Economics", 
        "checked": true},
        {"topic": "Fashion and Lifestyle", 
        "checked": true},
        {"topic": "Literature", 
        "checked": true},
        {"topic": "Entertainment", 
        "checked": true},
        {"topic": "History and Culture",
        "checked": true},
        {"topic": "Spirituality", 
        "checked": true},
        {"topic": "Art", 
        "checked": true},
        {"topic": "Auto",
        "checked": true},
    ];

  }]);
