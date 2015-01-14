// angular.module('PetAppUI').controller('DashboardCtrl', function($scope, $http, ServerUrl) {
//     'use strict';

//     $http.get(ServerUrl + '/pets').success(function(response) {
//         $scope.pets = response;
//     });

//     $http.get(ServerUrl).success(function(response) {
//         $scope.user = response;
//     });


//     $scope.upsertPet = function(pet) {
//         var params = {
//             pet: pet
//         };

//         if (pet.id) {
//             $http.put(ServerUrl + '/pets/' + pet.id, params);
//         } else {
//             $http.post(ServerUrl + '/pets', params).success(function(response) {
//                 $scope.pets.push(response);
//             });
//         }

//         $scope.pet = {};
//     };

// });
