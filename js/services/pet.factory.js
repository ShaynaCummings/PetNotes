// angular.module('PetAppUI').factory('PetFactory', function($http, ServerUrl) {
//     var pets = [];

//     var fetch = function() {
//         $http.get(ServerUrl + '/pets/1').success(function(response) {
//             angular.copy(response, pets);
//         });
//     };

//     return {
//         pets: pets,
//         fetch: fetch
//     };
// });


// // if i wanted to use ng-resource:

// // var services = angular.module('PetAppUI.services', ['ngResource']);

// // services.factory('PetsFactory', function ($resource, ServerUrl) {
// //     return $resource(ServerUrl + '/pets', {}, {
// //         query: { method: 'GET', isArray: true },
// //         create: { method: 'POST' }
// //     })
// // });

// // services.factory('PetFactory', function ($resource, ServerUrl) {
// //     return $resource(ServerUrl + '/pets/:id', {}, {
// //         show: { method: 'GET' },
// //         update: { method: 'PUT', params: {id: '@id'} },
// //         delete: { method: 'DELETE', params: {id: '@id'} }
// //     })
// // });
