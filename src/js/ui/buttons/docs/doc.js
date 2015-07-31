angular.module('jbdemo')
    .controller('ButtonsCtrl',function ($scope) {

        $scope.button = {
            toggle: false,
            checkbox: {left: false, middle: true, right: false},
            radio: 'left'
        };
    });