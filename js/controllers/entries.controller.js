angular.module('PetAppUI').controller('EntriesCtrl', function($scope, ServerUrl, $http) {
    'use strict';

    var getEntries = function() {
      $http.get(ServerUrl + '/entries').success(function(response) {
        $scope.entries = response;
      });
    };

    getEntries();

  });
