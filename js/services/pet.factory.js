angular.module('PetAppUI').factory('PetFactory', function($http) {
    var pets = [];

    var fetch = function() {
        $http.get('http://petapp-api.herokuapp.com/pets/').success(function(response) {
            angular.copy(response, pets);
        });
    };

    return {
        pets: pets,
        fetch: fetch
    };
});
