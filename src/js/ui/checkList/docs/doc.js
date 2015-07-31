angular.module('jbdemo')
    .controller('CheckListCtrl', function ($scope) {
        $scope.checkSrc = ['a', 'b', 'c'];
        $scope.checkVal = 'a';
    });