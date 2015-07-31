angular.module('jbdemo')
    .controller('AlertCtrl',function ($scope,$sce, $jbAlert) {
        $scope.alert = {title: 'Holy guacamole!',
            content: 'Best check yo self, you\'re not looking too good.',
            type: 'info'};


        $scope.show = function() {
            $jbAlert({title: 'Holy guacamole!',
                content: 'Best check yo self, you\'re not looking too good.',
                placement: 'top', type: 'info', keyboard: true, show: true});
        };
    });