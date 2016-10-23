angular.module('wwsd.room', [])
.controller('roomController', ['$scope', '$routeParams',function($scope, $routeParams){
  console.log("HERE!! with room", $routeParams.id);
  var ref = firebase.database().ref($routeParams.id);
  var fb = $firebaseObject(ref);

  fb.$loaded().then(function() {
    console.log("loaded record:", fb.$id, fb.someOtherKeyInData);
    console.log("getting data:", fb);
    $scope.data = fb;
  });
  var unwatch = fb.$watch(function() {
    $scope.data = fb;
    console.log("data changed!");
  });
}]);