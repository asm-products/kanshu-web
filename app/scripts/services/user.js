'use strict';

/**
 * @ngdoc User Service
 * @name kanshuWebApp.user
 * @description
 * # User services
 * Factory in the kanshuWebApp.
 */
angular.module('kanshuWebApp')
  .factory('UserService', function () {

    var api = {};

    api.login = function(email, pwd) {
      console.log('Call login service: ' + email + ' - ' + pwd);
      return true;
    };

    api.logout = function() {
      console.log('Call logout service');
      return false;
    };

    api.signUp = function(callback) {
      console.log('Call signup service');
      callback();
      return true;
    };

    return api;
  });
