angular.module('jbdemo')
.controller('TreeviewCtrl', function ($scope) {
    $scope.src = [
        {
            Title: 'Root', IsChecked: false, Children: [
            {Title: 'Root', IsChecked: false, Children: []},
            {Title: 'Root', IsChecked: false, Children: [
                {Title: 'Root', IsChecked: false, Children: []},
                {Title: 'Root', IsChecked: false, Children: []}
            ]}
        ]
        }
    ];
});