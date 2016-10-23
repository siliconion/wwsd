angular.module('wwsd.room', [])
.controller('roomController', ['$rootScope','$scope', '$routeParams','$firebaseObject',function($rootScope,$scope, $routeParams, $firebaseObject){
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

  $scope.userStatus = () => {
    console.log("sign in status", $scope.userId, $scope.character);
    if(!$scope.userId) return 'singedOut';
    if(!$scope.character) return 'noChar';
    return 'ok';
  }
}]);