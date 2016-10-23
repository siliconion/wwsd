angular.module('wwsd.lobby', [])
.controller('lobbyController', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
  var ref = firebase.database().ref('situations');
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

  $scope.submitNew = () => {
    var key = Date.now().toString() + Math.floor(Math.random()*100);
    fb[key] = {
      situation: $scope.situation,
    };
    fb.$save().then(function(ref) {
      // ref.key === fb.$id; // true
      console.log(ref);
      $scope.situation = "";
      location.href='#/room/' + key;
    }, function(error) {
      console.log("Error:", error);
    });
  }

  $scope.enterRoom = (id) =>{
    unwatch();
    location.href='#/room/' + id;
  }
}]);