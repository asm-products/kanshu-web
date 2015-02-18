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
    	"text": "My Progress"},
    	{"src": "images/ic_poll_black_48dp.png",
    	"text": "My Saved Characters"},
    	{"src": "images/ic_assignment_black_48dp.png",
    	"text": "Practice Exercises"}],
    	[{"src": "images/ic_extension_black_48dp.png",
    	"text": "Add Ons"},
    	{"src": "images/ic_person_black_48dp.png",
    	"text": "My Account"},
    	{"src": "images/ic_settings_black_48dp.png",
    	"text": "Settings"}],
    	[{"src": "images/ic_help_black_48dp.png",
    	"text": "Help"},
    	{"src": "images/kanshu_about_gray.png",
    	"text": "About"}],
    	[{"src": "images/ic_search_black_48dp.png",
    	"text": "Sign Out"}]

    ];
  }]);
