var wwsd = angular.module('wwsd', [ 'ngRoute' ]);


/* Initializing and configuring Templates controllers and route providers */
wwsd.config([ '$routeProvider', function( $routeProvider ){
  $routeProvider.when('/', {
    templateUrl :  'templates/lobby.html',
    controller : 'lobbyController'
  }).when('/room', {
    templateUrl :  'templates/room.html',
    controller : 'roomController'
  }).otherwise({
    redirectTo:'/'
  });
}]);

wwsd.controller('lobbyController', ['$scope', function($scope){
  console.log("HERE!! with lobby");
}]);

wwsd.controller('roomController', ['$scope', function($scope){
  console.log("HERE!! with room");
}]);