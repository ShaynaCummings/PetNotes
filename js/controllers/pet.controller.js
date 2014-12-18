angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, ServerUrl) {
    'use strict';

    $http.get(ServerUrl + '/pets/' + pet.id, params).success(function(response) {
        $scope.pet.id = response;
    });



});
