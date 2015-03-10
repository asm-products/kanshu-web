'use strict';

describe('Service: TopicsService', function () {

  // load the service's module
  beforeEach(module('kanshuWebApp'));

  // instantiate service
  var TopicsService;
  beforeEach(inject(function (_TopicsService_) {
    TopicsService = _TopicsService_;
  }));

  it('should have a topics array', function () {
    expect(TopicsService.topics.length).not.toBe(0);
  });

  it('should have a last topic "All"', function () {
    expect(TopicsService.topics[TopicsService.topics.length - 1].topic).toBe("All");
  });

  it('should set checked to false for "All" when any topic is unchecked', function () {
    TopicsService.topics[4].checked = false;
    TopicsService.topicsChanged();
    expect(TopicsService.topics[TopicsService.topics.length - 1].checked).toBe(false);
  });

});
