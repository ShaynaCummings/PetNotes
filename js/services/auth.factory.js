angular.module('PetApp').factory('UserFactory', function($http, $window, ServerUrl) {
    var login = function(credentials) {
        return $http
            .post(ServerUrl + '/login', credentials)
            .success(function(response) {
                $window.sessionStorage.setItem('PetApp.user', response.token);

                $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('PetApp.user');
            });
    };

    var logout = function(credentials) {
        return $http
            .get(ServerUrl + '/logout')
            .success(function(response) {
                $window.sessionStorage.removeItem('PetApp.user');
            });
    };

    var isAuthenticated = function() {
        return !!$window.sessionStorage.getItem('PetApp.user');
    };

    return {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
});
