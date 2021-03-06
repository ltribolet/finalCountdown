'use strict';

/**
 * @ngdoc overview
 * @name finalCountdownApp
 * @description
 * # finalCountdownApp
 *
 * Main module of the application.
 */
angular
  .module('finalCountdownApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    // We use AngularJS dependency injection to fetch the route provider.
    // The route provider is used to setup our app's routes.

    // The config below simply says when you visit '/' it'll render
    // the views/main.html template controlled by the MainCtrl controller.

    // The otherwise method specifies what the app should do if it doesn't recognise
    // the route entered by a user. In this case, redirect to home.
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
