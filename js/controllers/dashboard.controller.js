angular.module('PetAppUI').controller('DashboardCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://petapp-api.herokuapp.com/pets').success(function(response) {
        $scope.pets = response;
    });

});
