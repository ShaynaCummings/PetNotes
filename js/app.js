angular.module('PetAppUI', [
    'ngRoute'
]).run(function(PetFactory) {
    PetFactory.fetch();
});

angular.module('PetAppUI').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'PetCtrl'
        })
        .when('/pet/:petId', {
            templateUrl: 'templates/record.html',
            controller: 'PetCtrl'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/signup', {
            templateUrl: 'templates/signup.html',
            controller: 'SignupCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('PetAppUI').factory('PetFactory', function($http, ServerUrl) {
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
});

angular.module('PetAppUI').factory('TitleFactory', function($http, ServerUrl) {
    var titles = [];

    var fetch = function() {
        $http.get(ServerUrl + '/titles').success(function(response) {
            // use angular.copy() to retain the original array which the controllers are bound to
            // tasks = response will overwrite the array with a new one and the controllers loose the reference
            // could also do tasks.length = 0, then push in the new items
            angular.copy(response, titles);
        });
    };

    return {
        titles: titles,
        fetch: fetch
    };
});

angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, ServerUrl, TitleFactory, PetFactory) {
    'use strict';

    $scope.pets = PetFactory.pets;
    $scope.titles = TitleFactory.titles;

    $scope.upsertPet = function(pet) {
        var params = {
            pet: pet
        };

        if (pet.id) {
            $http.put(ServerUrl + '/pets/' + pet.id, params).success(function(response) {
                PetFactory.fetch();
            });
        } else {
            $http.post(ServerUrl + '/pets', params).success(function(response) {
                PetFactory.fetch();
            });
        }

        $scope.pet = {};
    };

    $scope.editPet = function(pet) {
        $scope.pet = pet;
    };

    $scope.deletePet = function(pet) {
        $http.delete(ServerUrl + '/pets/' + pet.id).success(function(response) {
            // remove from pets array by id
            for (var i = 0; i < $scope.pets.length; i++){
                if ($scope.pets[i].id == pet.id) {
                    $scope.pets.splice(i, 1);

                    break;
                }
            }
        });
    };
});

angular.module('PetAppUI').controller('TitleCtrl', function($scope, $http, TitleFactory) {
    'use strict';

    $scope.titles = TitleFactory.titles;

    $scope.upsertTitle = function(title) {
        var params = {
            title: title
        };

        if (title.id) {
            $http.put(ServerUrl + '/titles/' + title.id, params);
        } else {
            $http.post(ServerUrl + '/titles', params).success(function(response) {
                $scope.titles.push(response);
            });
        }

        $scope.title = {};
    };

    $scope.editTitle = function(title) {
        $scope.title = title;
    };

    $scope.deleteTitle = function(title) {
        $http.delete(ServerUrl + '/titles/' + title.id).success(function(response) {
            // remove from pets array by id
            for (var i = 0; i < $scope.titles.length; i++){
                if ($scope.titles[i].id == title.id) {
                    $scope.titles.splice(i, 1);

                    break;
                }
            }
        });
    };
});


