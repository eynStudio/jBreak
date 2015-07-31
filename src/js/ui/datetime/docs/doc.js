angular.module('jbdemo')
    .controller('DatetimeCtrl', function ($scope) {

        $scope.selectedDate = "2015-03-24T16:00:00Z";// new Date();
        $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
        // $scope.fromDate = new Date();
        // $scope.untilDate = new Date();
        $scope.getType = function (key) {
            return Object.prototype.toString.call($scope[key]);
        };

        $scope.clearDates = function () {
            $scope.selectedDate = null;
        };

        $scope.time = new Date(1970, 0, 1, 10, 30);
        $scope.selectedTimeAsNumber = 10 * 36e5;
        $scope.selectedTimeAsString = '10:00';
        $scope.sharedDate = new Date(new Date().setMinutes(0));

    });