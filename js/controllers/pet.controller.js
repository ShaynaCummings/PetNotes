angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, $routeParams, ServerUrl) {
    'use strict';

    $scope.petId = $routeParams.petId;

    //get user data
    var getUsers = function() {
      $http.get(ServerUrl + '/users/1').success(function(response) {
          $scope.user = response;
      });
    };

    //get list all pets
    var getPets = function() {
      $http.get(ServerUrl + '/pets').success(function(response) {
          $scope.pets = response;
      });
    };

   // get one pet by id
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
