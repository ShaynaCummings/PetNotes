angular.module('PetAppUI').controller('DashboardCtrl', function($scope, $http, ServerUrl) {
    'use strict';

    $http.get(ServerUrl + '/pets').success(function(response) {
        $scope.pets = response;
    });

    $http.get(ServerUrl).success(function(response) {
        $scope.user = response;
    });

});
