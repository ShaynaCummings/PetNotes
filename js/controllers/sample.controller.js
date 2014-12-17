angular.module('PetAppUI').controller('SampleCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/pets/1').success(function(response) {
        $scope.pets = response;
    });

});
