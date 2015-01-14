angular.module('PetAppUI').factory('PetFactory', function($http, ServerUrl, $routeParams) {
    var pets = [];

    var fetch = function() {
        $http.get(ServerUrl + '/pets').success(function(response) {
            angular.copy(response, pets);
        });
    };

    return {
        pets: pets,
        fetch: fetch
    };

    var getPet = function() {
      $http.get(ServerUrl + '/pets/' + $routeParams.petId).success(function(response) {
          $scope.pet = response;
      });
    };
});

