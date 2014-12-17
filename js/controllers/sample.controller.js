angular.module('PetAppUI').controller('SampleCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://petapp-api.herokuapp.com/pets/1').success(function(response) {
        $scope.pets = response;
    });

});
