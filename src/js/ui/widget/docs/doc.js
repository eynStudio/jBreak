angular.module('jbdemo')
    .controller('WidgetCtrl', function ($scope, phoneCtx) {

        $scope.ctx = phoneCtx;
        phoneCtx.refresh();
        // console.log(phoneCtx);
        $scope.meta = {
            ctx: phoneCtx,
            page: true,
            local: false,
            cols: [
                {title: 'id', field: 'id', celltpl: '<code>{{$row.id}}</code>'},
                {title: 'xm', field: 'name', sort: 0, filter: true},
                {title: 'age', type: 'int', field: 'age', sort: 0},
                {title: 'pp', field: 'pp', type: 'jbzd', jbzd: 'pp'},
                {title: 'pubDate', type: 'date', field: 'pubDate'},
                {title: 'snippet', field: 'snippet'},
                {title: 'opt', celltpl: '<span class="btn btn-default" ng-click="meta.onSelect($row)">hello</span>'}
            ],
            filter: {
                page: 1,
                perPage: 20,
                groups: []
            },
            onSelect: function (r) {
                console.log(r);
            }
        };
    });
