angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, $routeParams, ServerUrl) {
    'use strict';

    $scope.petId = $routeParams.petId;

    //get users
    var getUsers = function() {
      $http.get(ServerUrl).success(function(response) {
          $scope.user = response;
      });
    };

    //get all pets
    var getPets = function() {
      $http.get(ServerUrl + '/pets').success(function(response) {
          $scope.pets = response;
      });
    };

   // get one pet
    var getPet = function() {
      $http.get(ServerUrl + '/pets/' + $routeParams.petId).success(function(response) {
          $scope.pet = response;
      });
    };

    getPet();
    getUsers();
    getPets();



    // $scope.upsertPet = function(pet) {
    //   var params = {
    //       pet: pet
    //   };

    //   if (pet.id) {
    //       $http.put(ServerUrl + '/pets/' + pet.id, params);
    //   } else {
    //       $http.post(ServerUrl + '/pets', params).success(function(response) {
    //           $scope.pets.push(response);
    //       });
    //   }

    //   $scope.pet = {};
    // };

    // });

});
