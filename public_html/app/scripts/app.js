/* global app: true */
/* exported app */


'use strict';

/**
 * @ngdoc overview
 * @name publicHtmlApp
 * @description
 * # publicHtmlApp
 *
 * Main module of the application.
 */
var app = angular.module('publicHtmlApp', [ 'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'firebase' ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
