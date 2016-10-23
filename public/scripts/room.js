angular.module('wwsd.room', [])
.controller('roomController', ['$scope', '$routeParams',function($scope, $routeParams){
  console.log("HERE!! with room", $routeParams.id);
}]);