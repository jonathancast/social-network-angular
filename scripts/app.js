'use strict';

var app = angular.module('albatross-social-network', ['ngMessages']);

var myCtrl = function($scope, socialNetwork) {
    $scope.showLogin = function(k) {
        this.login = { onlogin: k };
        this.loginVisible = true;
        this.mainVisible = false;
    };

    $scope.hideLogin = function() {
        this.loginVisible = false;
        this.mainVisible = true;
    };

    var setupUser = function() {
        $scope.hideLogin();

        socialNetwork.user().then(
            function(user) { $scope.user = user },
            function(err) {
                if (err.status === 401) {
                    $scope.showLogin(setupUser);
                } else {
                    console.log('Got weird error; help', err.status, err);
                }
            }
        );
    };

    setupUser();
};

var socialNetwork = function($http) {
    var res = {};

    res.user = function() {
        return $http.get('/api/user');
    }

    return res;
};

app.factory('socialNetwork', [ '$http', socialNetwork ]);
app.controller('myCtrl', [ '$scope', 'socialNetwork', myCtrl ]);
