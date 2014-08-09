'use strict';

/**
 * @ngdoc function
 * @name finalCountdownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalCountdownApp
 */
angular.module('finalCountdownApp')
  // The controller function let's us give our controller a name: MainCtrl
  // We'll then pass an anonymous function to serve as the controller itself.
  .controller('MainCtrl', ['$scope','$timeout',function ($scope,$timeout) {
    //Adding initial value for counter
    $scope.initialCounter = 10;
    $scope.counter = $scope.initialCounter;
    var stopped;

    //timeout function
    //1000 milliseconds = 1 second
    //Every second counts
    //Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.
    $scope.countdown = function() {
      $scope.counter--;
      if ($scope.counter > 0) {
        stopped = $timeout($scope.countdown, 1000);
      }
    };

    $scope.reset = function(){
      $scope.stop();
      $scope.counter = $scope.initialCounter;
    };

    $scope.stop = function(){
      $timeout.cancel(stopped);
    };
  }]);
