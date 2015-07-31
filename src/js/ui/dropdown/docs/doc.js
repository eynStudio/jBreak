angular.module('jbdemo')
    .controller('DropdownCtrl',function ($scope,$jbAlert) {

        $scope.dropdown = [
            {text: '<span class="glyphicon glyphicon-search"></span>&nbsp;Another action', href: '#anotherAction'},
            {text: '<i class="fa fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")'},
            {text: '<i class="fa fa-external-link"></i>&nbsp;External link', href: '/auth/facebook', target: '_self'},
            {divider: true},
            {text: 'Separated link', href: '#separatedLink'}
        ];
        $scope.del = [
            {text: '确定删除？', click: 'toDel()'}
        ];

        $scope.toDel = function () {
            console.log('deleted');
        };
        $scope.$alert = function(title) {
            $jbAlert({title: title, content: 'Best check yo self, you\'re not looking too good.', placement: 'top', type: 'info', keyboard: true, show: true});
        };
    });