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

angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, ServerUrl, $routeParams, TitleFactory, PetFactory) {
    'use strict';

    $scope.pets = PetFactory.pets;
    $scope.petId = $routeParams.petId;
    $scope.titles = TitleFactory.titles;

    var getUsers = function() {
    $http.get(ServerUrl + '/users/1').success(function(response) {
          $scope.user = response;
        });
    };

   // get one pet by id
    var getPet = function() {
      $http.get(ServerUrl + '/pets/' + $routeParams.petId).success(function(response) {
          $scope.pet = response;
      });
    };
    getPet();
    getUsers();

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

angular.module('PetAppUI').directive("clickToEdit", function () {
            var editorTemplate = '' +
                '<div class="click-to-edit">' +
                    '<div ng-hide="view.editorEnabled">' +
                        '{{value}} ' +
                        '<a class="button tiny" ng-click="enableEditor()">Edit</a>' +
                    '</div>' +
                    '<div ng-show="view.editorEnabled">' +
                        '<input type="text" class="small-12.columns" ng-model="view.editableValue">' +
                        '<a class="btn" ng-click="upsertPet(pet)" >Save</a>' +
                        ' or ' +
                        '<a class="btn tiny" ng-click="disableEditor()">cancel</a>' +
                    '</div>' +
                '</div>';

            return {
                restrict: "A",
                replace: true,
                template: editorTemplate,
                scope: {
                    value: "=clickToEdit",
                },
                link: function (scope, element, attrs) {
                    scope.view = {
                        editableValue: scope.value,
                        editorEnabled: false
                    };

                    scope.enableEditor = function () {
                        scope.view.editorEnabled = true;
                        scope.view.editableValue = scope.value;
                        setTimeout(function () {
                            element.find('input')[0].focus();
                            //element.find('input').focus().select(); // w/ jQuery
                        });
                    };

                    scope.disableEditor = function () {
                        scope.view.editorEnabled = false;
                    };

                    scope.save = function () {
                        scope.value = scope.view.editableValue;
                        scope.disableEditor();
                    };

                }
            };
        });


angular.module('PetAppUI').controller('LengthCtrl', function($scope, $http, LengthFactory) {
    'use strict';

    $scope.lengths = LengthFactory.lengths;

    $scope.upsertLength = function(length) {
        var params = {
            length: length
        };

        if (length.id) {
            $http.put(ServerUrl + '/lengths/' + length.id, params);
        } else {
            $http.post(ServerUrl + '/lengths', params).success(function(response) {
                $scope.lengths.push(response);
            });
        }

        $scope.length = {};
    };

    $scope.editLength = function(length) {
        $scope.length = length;
    };

    $scope.deleteLength = function(length) {
        $http.delete(ServerUrl + '/lengths/' + length.id).success(function(response) {
            // remove from pets array by id
            for (var i = 0; i < $scope.length.length; i++){
                if ($scope.lengths[i].id == length.id) {
                    $scope.lengths.splice(i, 1);

                    break;
                }
            }
        });
    };
});


