(function(){

  var app = angular.module('restController', []);

  app.controller('restController',
    function($scope, $http){

      $scope.rests = [];

      $http({
       method: "GET",
       url: "https://api.appery.io/rest/1/db/collections/rests",
       headers: {'Content-Type': 'application/json;',
                 'X-Appery-Database-Id' : '570ff918e4b054aae33016eb'}
      }).then(function(restsData){
        angular.forEach(restsData.data, function($this) {
          //console.log($this);
          $scope.rests.push($this);
        })
      })

      $scope.doRefresh = function() {

        $scope.rests = [];

        //console.log("refreshing");
        $http({
         method: "GET",
         url: "https://api.appery.io/rest/1/db/collections/rests",
         headers: {'Content-Type': 'application/json;',
                   'X-Appery-Database-Id' : '570ff918e4b054aae33016eb'}
        }).success(function(restsData) {
          angular.forEach(restsData, function($this) {
            //console.log($this);
            $scope.rests.push($this);
          })
         }).finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         });
      };
    }
  );

})();
