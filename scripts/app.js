'use strict';

var app = angular.module('albatross-social-network', ['ngMessages']);

var myCtrl = function($scope) {
    $scope.loginVisible = true;
    $scope.mainVisible = false;
};

app.controller('myCtrl', [ '$scope', myCtrl ]);
