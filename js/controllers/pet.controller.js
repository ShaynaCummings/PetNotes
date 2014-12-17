angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, $q, PetFactory) {
    'use strict';

    $scope.pets = PetFactory.pets;


    $scope.upsertPet = function(pet) {
        var params = {
            pet: pet
        };

        if (pet.id) {
            $http.put(ServerUrl + 'pets/' + pet.id, params).success(function(response) {
                $q.all(updateSkills(pet.id)).then(function() {
                    clearForm();
                });
            });
        } else {
            $http.post(ServerUrl + 'pets', params).success(function(response) {
                $q.all(updateSkills(response.id)).then(function() {
                    clearForm();
                });
            });
        }
    };
});
