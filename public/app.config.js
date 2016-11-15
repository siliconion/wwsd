angular
  .module('wwsd')
  .config([ '$routeProvider', routeProvider ])
  .controller('appController', ['$scope','$firebaseAuth','$rootScope', appController]);

var firebaseConfig = {
    apiKey: "AIzaSyCOeo0tXA0-gso0qPOQr57go9rVaNgphn4",
    authDomain: "wwsd-1d721.firebaseapp.com",
    databaseURL: "https://wwsd-1d721.firebaseio.com",
    storageBucket: "wwsd-1d721.appspot.com",
    messagingSenderId: "427142324447"
  };

function routeProvider ($routeProvider ){
    $routeProvider.when('/', {
      template: '<lobby></lobby>'
    }).when('/room/:id', {
      template :  '<room></room>'
    }).when('/characters', {
      template: '<characters></characters>'
    }).otherwise({
      redirectTo:'/'
    });
  }

function appController($scope, $firebaseAuth, $rootScope){
    firebase.initializeApp(firebaseConfig);
    var auth = $firebaseAuth();
    $scope.CharImg = "img/char.svg";
    $scope.goToHome = () => {
      location.href="#/";
    }
    $scope.goToChar = () => {
      location.href="#/characters";
    }
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
    $scope.selectCharacter = (character, values) =>{
      console.log("select character", character, values);
      if($scope.userId){
        // $rootScope.character = character;
        $scope.character = character;
        $scope.CharImg = values.img;
        console.log($scope.CharImg)
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
  }