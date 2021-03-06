angular.module('PetAppUI').controller('LengthCtrl', function($scope, $http, $routeParams, ServerUrl) {
    'use strict';

    $scope.petId = $routeParams.petId;
    $scope.lengthId = $routeParams.lengthId

      $scope.createLength = function(length) {
      var params = {
          pet: pet
          length: length
      };

      $http.post(ServerUrl + '/pets' + pet.id + '/lengths', params)
        .success(function(response) {
            $scope.lengths.push(response);
      });

        $scope.pet = {};
        $scope.length = {};
    };

});
