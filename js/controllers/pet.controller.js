angular.module('PetAppUI').controller('PetCtrl', function($scope, $http, $q, PetFactory) {
    'use strict';

    $scope.pets = PetFactory.pets;

});


// var updateSkills = function(user_id) {
//         var promises = [];

//         _.forEach($scope.skills, function(item) {
//             var isChecked = item.checked;
//             var wasChecked = typeof _.find($scope.user.skills, {id: item.id}) !== 'undefined';

//             // add skill
//             if (isChecked && !wasChecked) {
//                 promises.push($http.put(ServerUrl + 'users/' + user_id + '/skills/' + item.id));
//             }

//             // remove skill
//             if (!isChecked && wasChecked) {
//                 promises.push($http.delete(ServerUrl + 'users/' + user_id + '/skills/' + item.id));
//             }
//         });

//         return promises;
//     };

    var clearForm = function() {
        $scope.pet = {};

        PetFactory.fetch();
        SkillFactory.resetChecked();
    };

    $scope.upsertPet = function(pet) {
        var params = {
            pet: pet
        };

        if (pet.id) {
            $http.put(ServerUrl + 'pets/' + pet.id, params).success(function(response) {
                $q.all(updateSkills(pet.id)).then(function() {
                    clearForm();
                });
            });
        } else {
            $http.post(ServerUrl + 'pets', params).success(function(response) {
                $q.all(updateSkills(response.id)).then(function() {
                    clearForm();
                });
            });
        }
    };

    $scope.editpet = function(pet) {
        $scope.pet = pet;

        // update skills based on this pet
        _.forEach($scope.skills, function(item) {
            if ($scope.petHasSkill(item)) {
                item.checked = true;
            }
        });
    };

    $scope.deletepet = function(pet) {
        $http.delete(ServerUrl + 'pets/' + pet.id).success(function(response) {
            $scope.pets.splice($scope.pets.indexOf(pet), 1);

            clearForm();
        });
    };

    $scope.petHasSkill = function(skill) {
        var found = [];

        if (typeof $scope.pet !== 'undefined' && typeof $scope.pet.skills !== 'undefined') {
            found = $scope.pet.skills.filter(function(item) {
                return item.id === skill.id;
            });
        }

        return found.length > 0;
    };
// });
