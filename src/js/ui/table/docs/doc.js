angular.module('jbdemo')
    .controller('TableCtrl2',function ($scope,$http,phoneCtx) {
        $scope.ctx=phoneCtx;
        phoneCtx.refresh();
       // console.log(phoneCtx);
        $scope.meta={
            ctx:phoneCtx,
            page: true,
            local: false,
            cols: [
                {title: 'id', field: 'id', celltpl: '<code>{{$row.id}}</code>'},
                {title: 'xm', field: 'name', sort: 0, filter: true},
                {title: 'age', type: 'int', field: 'age', sort: 0},
                {title: 'pp', field: 'pp', type: 'jbzd', jbzd: 'pp'},
                {title: 'pubDate',type:'date', field: 'pubDate'},
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

        $scope.items = [{id: 1, name: 'a', age: 1, date: '2011-03-07'},
            {id: 2, name: 'b', age: 11, date: '2012-03-07'},
            {id: 3, name: 'c', age: 31, date: '2013-03-07'},
            {id: 4, name: 'd', age: 41, date: '2014-03-07'}];

        $scope.add2 = function () {
            $scope.items.push({id: 5, name: 'e', age: 51, date: '2015-03-07'});
        };

        $scope.$edit=function(idx){
            console.log($scope.hi);
            $scope.$editIdx=idx;
        };
    })



    .controller('TableCtrl',function ($scope) {
        $scope.items = [{id:1,name:'a',age:1},
            {id:2,name:'b',age:11},
            {id:3,name:'c',age:31},
            {id:4,name:'d',age:41}];
        $scope.$edit=function(idx){
            "use strict";
            console.log($scope.hi);
            $scope.$editIdx=idx;
        };
    });