angular.module('wwsd.room', [])
.controller('roomController', 
  ['$rootScope','$scope', '$routeParams','$firebaseObject','$firebaseArray',
  function($rootScope,$scope, $routeParams, $firebaseObject, $firebaseArray){

  console.log("HERE!! with room", $routeParams.id);
  var ref = firebase.database().ref('situations').child($routeParams.id);
  var fb = $firebaseObject(ref);

  fb.$loaded().then(function() {
    console.log("getting data:", fb);
    $scope.data = fb;
  });
  var unwatch = fb.$watch(function() {
    $scope.data = fb;
    console.log("data changed!");
  });

  $scope.submitAnswer = ()=> {
    var refReplies = firebase.database().ref('situations').child($routeParams.id).child('replies');
    var fbReplies = $firebaseArray(ref);
    var key = Date.now().toString() + Math.floor(Math.random()*100);     
    console.log("seding replies!",$scope.answer, $scope.character) 
    var obj = {};
    obj[key] =  {
        reply: $scope.answer,
        character: $scope.character
      };
      fbReplies.$add({
        reply: $scope.answer,
        character: $scope.character
      }).then(function(ref) {
        // ref.key === fb.$id; // true
        console.log(ref);
        $scope.situation = "";
        location.href='#/room/' + key;
      }, function(error) {
        console.log("Error:", error);
      });
  }

  $scope.roomSelectChar = () => {
    $rootScope.goTo = $rootScope.room; 
    console.log("select room",  $rootScope.goTo , $rootScope.room);
    location.href='#/characters';
  }

  $scope.show3 = () => {
    console.log("sign in status", $scope.userId, $scope.character);
    if($scope.userId && $scope.character) return true;
    return false;
  }

  $scope.show2 = () => {
    console.log("sign in status", $scope.userId, $scope.character);
    if($scope.userId && !$scope.character) return true;
    return false;
  }
  $scope.show1 = () => {
    console.log("sign in status", $scope.userId, $scope.character);
    if(!$scope.userId && !$scope.character) return true;
    return false;
  }
}]);