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

wwsd.controller(['lobbyController', [function(){
  console.log("HERE!!");
}]]);

wwsd.controller(['roomController', [function(){
  console.log("HERE!!");
}]]);