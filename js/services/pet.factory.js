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


// if i wanted to use ng-resource:

// var services = angular.module('PetAppUI.services', ['ngResource']);

// services.factory('PetsFactory', function ($resource, ServerUrl) {
//     return $resource(ServerUrl + '/pets', {}, {
//         query: { method: 'GET', isArray: true },
//         create: { method: 'POST' }
//     })
// });

// services.factory('PetFactory', function ($resource, ServerUrl) {
//     return $resource(ServerUrl + '/pets/:id', {}, {
//         show: { method: 'GET' },
//         update: { method: 'PUT', params: {id: '@id'} },
//         delete: { method: 'DELETE', params: {id: '@id'} }
//     })
// });
