angular.module('jbdemo')
    .controller('TooltipCtrl',function ($scope) {

        $scope.tooltip = {title: 'Hello Tooltip<br />This is a multiline message!', checked: false};

    });