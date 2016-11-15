'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'components/navbar/navbar.template.html',
    controller: ['$routeParams', 
      function NavBarController($routeParams) {
        console.log("navbar controller")
      }
    ]
  });