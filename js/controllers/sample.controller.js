angular.module('PetAppUI').controller('SampleCtrl', function($scope, $http,  ServerUrl) {
    'use strict';

    // moved to pet.factory.js:

    $http.get(ServerUrl + '/pets/1').success(function(response) {
        $scope.pets = response;
    });

    $http.get('http://localhost:3000/entries').success(function(response) {
        $scope.entries = response;
    });

      // $scope.pets = PetsFactory.pets;

      $scope.upsertPet = function(pet, ServerUrl) {
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

      $scope.editPet = function(pet) {
          $scope.pet = pet;
      };

      $scope.deletePet = function(pet, ServerUrl) {
          $http.delete(ServerUrl + pet.id).success(function(response) {
              for (var i = 0; i < $scope.pets.length; i++){
                  if ($scope.pets[i].id == pet.id) {
                      $scope.pets.splice(i, 1);

                      break;
                  }
              }
          });
      };


});
