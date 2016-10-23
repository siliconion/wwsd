angular.module('wwsd.characters', [])
.controller('charactersController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
  var ref = firebase.database().ref('characters');
  var fb = $firebaseObject(ref);
  console.log("char controller")
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