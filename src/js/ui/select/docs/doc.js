angular.module('jbdemo')
    .controller('SelectCtrl', function ($scope) {

        $scope.selectedIcon = '';
        $scope.selectedIcons = ['Globe', 'Heart'];
        $scope.icons = [
            {value: 'Gear', label: '<i class="fa fa-gear"></i> Gear'},
            {value: 'Globe', label: '<i class="fa fa-globe"></i> Globe'},
            {value: 'Heart', label: '<i class="fa fa-heart"></i> Heart'},
            {value: 'Camera', label: '<i class="fa fa-camera"></i> Camera'}
        ];

        $scope.selectedMonth = 0;
        $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    });
