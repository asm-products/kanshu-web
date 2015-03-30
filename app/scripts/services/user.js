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

    api.login = function(email, pwd, data) {
        console.log('Call login service: ' + email + ' - ' + pwd);
        //dummy values for general account data
        data.firstName = "Test";
        data.lastName = "User";
        data.country = "United States";
        data.bio = "I am the first user here!";
        data.pic = "https://d1015h9unskp4y.cloudfront.net/attachments/cb73d357-3d80-429c-a747-f2fe8ab08a10/Kanshu.png";
      return true;
    };

    api.logout = function() {
      console.log('Call logout service');
      return false;
    };

    api.signUp = function(data, callback) {
      console.log('Call signup service', data);
      callback();
      return true;
    };

    return api;
  });
