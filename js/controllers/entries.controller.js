angular.module('PetAppUI').controller('EntriesCtrl', function($scope, $http) {
    'use strict';

    var getEntries = function() {
      $http.get('http://localhost:3000/entries').success(function(response) {
        $scope.entries = response;
      });
    };

    getEntries();

  });
