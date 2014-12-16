angular.module('PetAppUI', [
    'ngRoute'
]);

angular.module('PetAppUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        })
         .when('/record', {
             templateUrl: 'templates/record.html',
             controller: 'SampleCtrl'
        })
        .when('/pets/:petId', {
            templateUrl: 'templates/record.html',
            controller: 'PetCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('PetAppUI').controller('NavbarCtrl', function($scope, $location) {
    'use strict';

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});

angular.module('PetAppUI').controller('DashboardCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://petapp-api.herokuapp.com/pets').success(function(response) {
        $scope.pets = response;
    });

});

angular.module('PetAppUI').controller('SampleCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://petapp-api.herokuapp.com/pets/1').success(function(response) {
        $scope.pets = response;
    });

});



// angular.module('PetAppUI').controller('DashboardCtrl', ['$scope', 'Pet',
//   function($scope, Pet) {
//     $scope.pets = Pet.query();
//   }]);

// angular.module('PetAppUI').controller('RecordCtrl', ['$scope', '$routeParams', 'Pet',
//   function($scope, $routeParams, Pet) {
//     $scope.phone = Pet.get({petId: $routeParams.petId}, function(pet) {         });

//   }]);

