angular.module('jbdemo')
    .controller('PopoverCtrl',function ($scope) {

        $scope.popover = {title: 'Title', content: 'Hello Popover<br />This is a multiline message!'};

    });