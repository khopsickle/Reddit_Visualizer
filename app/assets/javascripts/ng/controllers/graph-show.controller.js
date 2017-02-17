var RV = RV || {}
RV.RedditViz.controller('GraphShowCtrl', ['$scope', 'subredditService',
  function($scope, subredditService) {

    var _showSubreddit = function(d) {
      $scope.subreddit = d;      
      $scope.$apply()
    }

    $scope.subredditName = "AskReddit";
    $scope.drawGraph = function() {
      subredditService.getSubreddit($scope.subredditName)
        .then(function(response) {
          RV.config.json.rootId = response.id;
          RV.config.nodeClickHandlers = [ _showSubreddit ];
          $scope.subreddit = response;
          RV.graph().initialize(RV.config);
        })
    }

    $scope.drawGraph()
  }])