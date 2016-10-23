angular.module('wwsd.lobby', [])
.controller('lobbyController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
  var ref = firebase.database().ref();
  var fb = $firebaseObject(ref);

  fb.$loaded().then(function() {
    console.log("loaded record:", fb.$id, fb.someOtherKeyInData);
    // To iterate the key/value pairs of the object, use angular.forEach()
    // angular.forEach(fb, function(value, key) {
    //   console.log("receive data:", key, value);
    // });
    // To make the data available in the DOM, assign it to $scope
    console.log("getting data:", fb);
    $scope.data = fb;
  });
  var unwatch = fb.$watch(function() {
    $scope.data = fb;
    console.log("data changed!");
  });

  $scope.submitNew = () => {
    console.log("submitting:", $scope.situation);
    var key = Date.now().toString() + Math.floor(Math.random()*100);
    fb[key] = {
      situation: $scope.situation,
    };
    fb.$save().then(function(ref) {
      // ref.key === fb.$id; // true
      // console.log(ref.key, fb.$id);
      $scope.situation = "";
    }, function(error) {
      console.log("Error:", error);
    });
  }

  $scope.enterRoom = (id) =>{
    console.log("entering room", id);
    location.href='#/room/' + id;
  }
  // at some time in the future, we can unregister using
  // unwatch();
}]);