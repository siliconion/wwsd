var wwsd = angular.module('wwsd', [ 'ngRoute','firebase' ]);

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

wwsd.controller('lobbyController', ['$scope','$firebaseAuth', function($scope,
		$firebaseAuth){
  console.log("HERE!! with lobby");
	var auth = $firebaseAuth();
	$firebaseAuth.$signInWithPopup("google").then(function(firebaseUser) {
		console.log("Signed in as:", firebaseUser.uid);
	}).catch(function(error) {
		console.log("Authentication failed:", error);
	});
}]);

wwsd.controller('roomController', ['$scope', function($scope){
  console.log("HERE!! with room");
}]);

wwsd.controller('authController', ['$scope', function($scope){
  console.log("HERE!! auth");
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
}]);
