(function(){

  var app = angular.module('addnewController', []);

  app.controller('addnewController',
    function($scope, $http, $state){
      $scope.data = {};

      $scope.submit = function(){
          var url = "https://api.appery.io/rest/1/db/collections/rests";


          var text = '{"name": "'+ $scope.data.restname +'", "tel": "'+ $scope.data.tel +'"}';
          var obj = JSON.parse(text);
          //console.log(obj);

          $http({
              method: 'POST',
              url: url,
              data: obj,
              headers: {'Content-Type': 'application/json;',
                        'X-Appery-Database-Id' : '570ff918e4b054aae33016eb'}
          }).then(function (res){
            //console.log(res.status);
            $state.go("home");
          });
      };
    }
  );

})();
