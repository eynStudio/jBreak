angular.module('jbdemo')
    .controller('RadioListCtrl', function ($scope) {
    $scope.radioSrc = ['a', 'b', 'c'];
    $scope.radioVal = 'a';
});