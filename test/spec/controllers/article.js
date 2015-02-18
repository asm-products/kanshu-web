'use strict';

describe('Controller: ArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('kanshuWebApp'));

  var ArticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticleCtrl = $controller('ArticleCtrl', {
      $scope: scope
    });
  }));

  it('start showing inline definitions', function () {
    expect(scope.showingInlineDefinitions).toBe(true);
  });

  it('should not show inline definitions after toggling', function () {
    scope.toggle();
    expect(scope.showingInlineDefinitions).toBe(false);
  })
});
