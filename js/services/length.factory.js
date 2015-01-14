angular.module('PetAppUI').factory('LengthFactory', function($http, ServerUrl, $routeParams) {
    var lengths = [];

    $scope.petId = $routeParams.petId;

    var fetch = function() {
        $http.get(ServerUrl + '/pets/' + $routeParams.petId + '/lengths').success(function(response) {
            angular.copy(response, lengths);
        });
    };

    return {
        lengths: lengths,
        fetch: fetch
    };
});
