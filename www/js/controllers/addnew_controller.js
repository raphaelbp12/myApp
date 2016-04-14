(function(){

  var app = angular.module('addnewController', []);

  app.controller('addnewController',
    function($scope, $http, $state){
      $scope.data = {};

      var parameter = JSON.stringify({rest:{name: "teste12321", tel: 1231231}});

      console.log(parameter);

      $scope.submit = function(){
          var url = "https://api.appery.io/rest/1/db/collections/rests";


          var parameter = JSON.stringify({rest: {name: "teste12321", tel: 1231231}});

          var text = '{"name": "marcia23", "tel": 643525}';
          var obj = JSON.parse(text);
          console.log(obj);

          console.log("submit = " + parameter);

          $http({
              method: 'POST',
              url: url,
              data: obj,
              headers: {'Content-Type': 'application/json;',
                        'X-Appery-Database-Id' : '570ff918e4b054aae33016eb'}
          }).then(function (res){
            console.log(res.status);
          });
      };
    }
  );

})();
