(function(){

  var app = angular.module('menuController', []);

  app.controller('menuController',
    function($scope, $http, $state){
      $scope.go = function ( path ) {
        $state.go(path);
      };
    }
  );

})();
