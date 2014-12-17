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
            controller: 'DashboardCtrl'
        })
         .when('/record', {
             templateUrl: 'templates/record.html',
             controller: 'SampleCtrl'
        })
        .when('/pets/:petId', {
            templateUrl: 'templates/record.html',
            controller: 'PetCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

