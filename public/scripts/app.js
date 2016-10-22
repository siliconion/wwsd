var wwsd = angular.module('wwsd', [ 'ngRoute','firebase' ]);

var firebaseConfig = {
  apiKey: "AIzaSyCsb9rxT5sn67SPg2Ri6ty9Cd3LJ9eTwpU",
  authDomain: "my-project-1473181399640.firebaseapp.com",
  databaseURL: "https://my-project-1473181399640.firebaseio.com",
  storageBucket: "my-project-1473181399640.appspot.com",
  messagingSenderId: "286241134059"
};

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
  firebase.initializeApp(firebaseConfig);
}]);

wwsd.controller('lobbyController', ['$scope', function($scope){
  console.log("HERE!! with lobby");
}]);

wwsd.controller('roomController', ['$scope', function($scope){
  console.log("HERE!! with room");
}]);

wwsd.controller('authController', ['$scope','$firebaseAuth', function($scope, $firebaseAuth){
  console.log("HERE!! auth");
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
    // $firebaseAuth.$
  }
}]);
