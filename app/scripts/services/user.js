'use strict';

/**
 * @ngdoc User Service
 * @name kanshuWebApp.user
 * @description
 * # User services
 * Factory in the kanshuWebApp.
 */
angular.module('kanshuWebApp')
  .factory('UserService',function () {

      var api = {};

      api.user = {};
      var isLoggedIn = false;

    api.login = function(email, pwd) {
        console.log('Call login service: ' + email + ' - ' + pwd);
        api.user.email = email;
        //dummy values for general account data
        api.user.firstName = "Test";
        api.user.lastName = "User";
        api.user.country = "United States";
        api.user.bio = "I am the first user here!";
        api.user.pic = "https://d1015h9unskp4y.cloudfront.net/attachments/cb73d357-3d80-429c-a747-f2fe8ab08a10/Kanshu.png";
        isLoggedIn = true;
      return true;
    };

    api.logout = function() {
        console.log('Call logout service');
        isLoggedIn = false;
      return false;
    };

    api.signUp = function(data, callback) {
        console.log('Call signup service', data);
        isLoggedIn = true;
      callback();
      return true;
    };

    api.isLoggedIn = function () {
        return isLoggedIn;
    }

    api.getCurrentUser = function () {
        if (isLoggedIn) return api.user;
        else return null;
    }

    api.getUserMetrics = function () {
        if (!isLoggedIn) return null;
        if (api.user.userMetrics) return api.user.userMetrics;
        api.user.userMetrics = {};
        console.log('Call user metrics service');
        api.user.userMetrics.articlesRead = 12;
        api.user.userMetrics.charactersSaved = 288;
        api.user.userMetrics.charactersMastered = 100;
        return api.user.userMetrics;
    }
    return api;
  });
