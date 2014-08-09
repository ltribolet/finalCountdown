'use strict';

/**
 * @ngdoc function
 * @name finalCountdownApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the finalCountdownApp
 */
angular.module('finalCountdownApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
