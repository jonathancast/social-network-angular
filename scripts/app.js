'use strict';

var app = angular.module('albatross-social-network', []);

var myCtrl = function($scope) {
    $scope.loginVisible = true;
    $scope.mainVisible = false;
};

app.controller('myCtrl', [ '$scope', myCtrl ]);
