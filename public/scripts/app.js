var wwsd = angular.module('wwsd', [ 
  'ngRoute',
  'firebase',
  'wwsd.room',
  'wwsd.lobby'
  ]);

var firebaseConfig = {
    apiKey: "AIzaSyCOeo0tXA0-gso0qPOQr57go9rVaNgphn4",
    authDomain: "wwsd-1d721.firebaseapp.com",
    databaseURL: "https://wwsd-1d721.firebaseio.com",
    storageBucket: "wwsd-1d721.appspot.com",
    messagingSenderId: "427142324447"
  };

/* Initializing and configuring Templates controllers and route providers */
wwsd.config([ '$routeProvider', function( $routeProvider ){
  $routeProvider.when('/', {
    templateUrl :  'templates/lobby.html',
    controller : 'lobbyController'
  }).when('/room/:id', {
    templateUrl :  'templates/room.html',
    controller : 'roomController'
  }).otherwise({
    redirectTo:'/'
  });
  firebase.initializeApp(firebaseConfig);
}]);

wwsd.controller('authController', ['$scope','$firebaseAuth', function($scope, $firebaseAuth){
  var auth = $firebaseAuth();
  $scope.signIn = ()=> {
    auth.$signInWithPopup("google").then(function(data) {
      console.log("Signed in as:", JSON.stringify(data));
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }
  $scope.signOut = () => {
    console.log("sign out");
    $firebaseAuth.$signOut();
  }
}]);
