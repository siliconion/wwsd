var wwsd = angular.module('wwsd', [ 
  'ngRoute',
  'firebase',
  'wwsd.room',
  'wwsd.characters',
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
  }).when('/characters', {
    templateUrl :  'templates/characters.html',
    controller : 'charactersController'
  }).otherwise({
    redirectTo:'/'
  });
  firebase.initializeApp(firebaseConfig);
}]);

wwsd.controller('appController', ['$scope','$firebaseAuth','$rootScope', function($scope, $firebaseAuth, $rootScope){
  var auth = $firebaseAuth();
  $scope.signIn = (goTo)=> {
    auth.$signInWithPopup("google").then(function(data) {
      console.log("Signed in as:", data.user.photoURL);
      $scope.userId = data.user.uid;
      if(goTo){
        location.href=goTo;
      }
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }
  $scope.signOut = () => {
    console.log("sign out");
    auth.$signOut();
    $scope.userId = null;
    $scope.character = null;
  }
  $scope.userStatus = () => {
    if(!$scope.userId) return 'singedOut';
    if(!$scope.character) return 'noChar';
    return 'ok';
  }
  $scope.selectCharacter = (character) =>{
    console.log("select character", character);
    if($scope.userId){
      $scope.character = character;
      if($rootScope.goTo){
        var goTo = $rootScope.goTo;
        $rootScope.goTo = null;
        console.log("going to", goTo);
        location.href="#/room/"+goTo;
      }
    } else {
      alert("Please Sign In!");
    }
  }
}]);
