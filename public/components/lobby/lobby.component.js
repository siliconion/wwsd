'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('lobby').
  component('lobby', {
    templateUrl: 'components/lobby/lobby.template.html',
    controller: ['$routeParams', 
      function LobbyController($routeParams) {
        console.log("lobby controller")
      }
    ]
  });

// angular.module('wwsd.lobby', [])
// .controller('lobbyController', ['$scope', '$firebaseObject', '$rootScope', function($scope, $firebaseObject, $rootScope){
//   var ref = firebase.database().ref('situations');
//   var fb = $firebaseObject(ref);

//   fb.$loaded().then(function() {
//     console.log("loaded record:", fb.$id, fb.someOtherKeyInData);
//     console.log("getting data:", fb);
//     $scope.data = fb;
//   });
//   var unwatch = fb.$watch(function() {
//     $scope.data = fb;
//     console.log("data changed!");
//   });

//   $scope.submitNew = () => {
//     var key = Date.now().toString() + Math.floor(Math.random()*100);
//     fb[key] = {
//       situation: $scope.situation,
//       replies:null
//     };
//     fb.$save().then(function(ref) {
//       // ref.key === fb.$id; // true
//       console.log(ref);
//       $scope.situation = "";
//       location.href='#/room/' + key;
//     }, function(error) {
//       console.log("Error:", error);
//     });
//   }

//   $scope.enterRoom = (id) =>{
//     unwatch();
//     $rootScope.room = id;
//     location.href='#/room/' + id;
//   }
// }]);