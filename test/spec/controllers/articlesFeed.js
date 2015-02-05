'use strict';

describe('Controller: ArticlesFeedCtrl', function () {

  // load the controller's module
  beforeEach(module('kanshuWebApp'));

  var ArticlesFeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesFeedCtrl = $controller('ArticlesFeedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should have feed', function () {
    expect(scope.feed).not.toBe(undefined);
  });
});
