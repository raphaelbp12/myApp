(function(){

  var app = angular.module('restController', []);

  app.controller('restController',
    function($scope, $http){
      var url = "http://54.233.126.31/rests";

      $http.get(url)
        .success(function(rests) {
          $scope.rests = rests;
        })
        .error(function(data) {
          console.log("ocorreu um erro no servidor");
        })
    }
  );

})();
