'use strict';

/**
 * @ngdoc service
 * @name kanshuWebApp.topics
 * @description
 * # topics
 * Factory in the kanshuWebApp.
 */
angular.module('kanshuWebApp')
  .factory('TopicsService', function () {

    var topicsAPI = {};
 
    topicsAPI.topics = [
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
        {"topic": "All",
        "checked": true}
    ];

    topicsAPI.checkAllTopics = function(){
        for (var i = 0; i < topicsAPI.topics.length - 1; i++){
            topicsAPI.topics[i].checked = true;
        }
    };

    topicsAPI.uncheckAllTopics = function(){
        for (var i = 0; i < topicsAPI.topics.length - 1; i++){
            topicsAPI.topics[i].checked = false;
        }
    };    

    topicsAPI.topicsChanged = function(topic){
        if(topic === "All"){
            if(topicsAPI.topics[topicsAPI.topics.length - 1].checked === true){
                topicsAPI.checkAllTopics();
            }else{
                topicsAPI.uncheckAllTopics();
            }
        }else{
            var allTrue = true;
            for(var i = 0; i < topicsAPI.topics.length - 1; i++){
                allTrue = allTrue && topicsAPI.topics[i].checked; 
                if(allTrue === false){
                    break;
                }
            }
            if(allTrue){
                topicsAPI.topics[topicsAPI.topics.length - 1].checked = true;
            }else{
                topicsAPI.topics[topicsAPI.topics.length - 1].checked = false;
            }
        }
    };

    topicsAPI.getTopics = function(){
      return topicsAPI.topics;
    };

    // Public API here
    return topicsAPI;

  });
