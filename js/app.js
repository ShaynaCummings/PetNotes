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
            controller: 'RecordCtrl'
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

    $http.get('http://localhost:3000/pets').success(function(response) {
        $scope.pets = response;
    });

});

angular.module('PetAppUI').controller('RecordCtrl', function($scope, $http) {
    'use strict';

    // $http.get('https://petapp-api.herokuapp.com/pets').success(function(response) {
    //     $scope.pets = response;
    // });

});
