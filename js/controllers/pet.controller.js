// angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, $routeParams, ServerUrl) {
//     'use strict';

//     $scope.petId = $routeParams.petId;

//     //get user data
//     var getUsers = function() {
//       $http.get(ServerUrl + '/users/1').success(function(response) {
//           $scope.user = response;
//       });
//     };

//     //get list all pets
//     var getPets = function() {
//       $http.get(ServerUrl + '/pets').success(function(response) {
//           $scope.pets = response;
//       });
//     };

//    // get one pet by id
//     var getPet = function() {
//       $http.get(ServerUrl + '/pets/' + $routeParams.petId).success(function(response) {
//           $scope.pet = response;
//       });
//     };

//     getPet();
//     getUsers();
//     getPets();

//     $scope.createPet = function(pet) {
//       var params = {
//           pet: pet
//       };

//       $http.post(ServerUrl + '/pets', params)
//         .success(function(response) {
//             $scope.pets.push(response);
//       });

//       $scope.pet = {};
//     };

//     $scope.deletePet = function(pet) {

//       $http.delete(ServerUrl + '/pets/' + pet.id)
//       .success(function(response) {
//           $scope.pets.splice($scope.pets.indexOf(pet), 1);

//           $scope.pet = {};
//       });
//     }

//     // });

// });


