angular.module('PetAppUI').factory('LengthFactory', function($http, ServerUrl) {
    var lengths = [];

    var fetch = function() {
        $http.get(ServerUrl + '/pets' + :id + 'lengths').success(function(response) {
            angular.copy(response, lengths);
        });
    };

    return {
        lengths: lengths,
        fetch: fetch
    };
});
