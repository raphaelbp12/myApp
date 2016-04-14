(function(){

  var app = angular.module('restController', []);

  app.controller('restController',
    function($scope, $http){

      console.log("rest");

      $http.get({
        method: "GET",
        url: "https://api.appery.io/rest/1/db/collections/rests",
        headers: {'Content-Type': 'application/json;',
                  'X-Appery-Database-Id' : '570ff918e4b054aae33016eb'}
      }).success(function(rests) {
          $scope.rests = rests;
        })
        .error(function(data) {
          console.log("ocorreu um erro no servidor");
        })
    }
  );

})();
