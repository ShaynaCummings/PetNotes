angular.module('PetAppUI', [
    'ngRoute'
]);

angular.module('PetAppUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'PetCtrl'
        })
         .when('/sample', {
             templateUrl: 'templates/record.html',
             controller: 'SampleCtrl'
        })
        .when('/pet/:petId', {
            templateUrl: 'templates/record.html',
            controller: 'PetCtrl'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/signup', {
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});



