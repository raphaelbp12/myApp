(function(){

  var app = angular.module('addnewController', []);

  app.controller('addnewController',
    function($scope, $http, $state){
      $scope.data = {};

      $scope.submit = function(){
          var url = "http://54.233.126.31/rests";

          var text = '{ "rest" : { "name":"teste123213" , "tel":1231321 } }';
          var obj = JSON.parse(text);
          console.log(obj);

          $http({
              method: 'POST',
              url: url,
              data: obj,
              headers: {'Content-Type': 'application/x-www-form-urlencoded;'}
          }).then(function (res){
            console.log(res.status);
          });
      };
    }
  );

})();
