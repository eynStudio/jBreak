(function (ng) {
    var module = ng.module('jb.ui.table');
    var strFilterOpt={
        empty:'空',
        not_empty:'非空',
        contains: '包含',
        start:'开始为',
        end:'结束为',
        equal:'等于'
    };
    var strFilterCondition = {
        NONE: '无',
        AND: '与',
        OR: '或'
    };

    function tableCtr($scope, $element, $attrs, $filter, $parse, $timeout, $window,jb$) {
        var win = angular.element($window);
        var ctrl = this;
        var orderBy = $filter('orderBy');
        var filter = $filter('filter');
        var fmt=jb$.fmt;
        var $src = $scope.$src = copyRefs($scope.src);
        var cols = [];
        var filtered;
        var tableState = {
            sort: {},
            search: {},
            pagination: {
                start: 0
            }
        };

        function update$src() {
            $scope.$src = copyRefs($scope.meta.ctx.lst);
            ctrl.pipe();
            resize();
        }
        function copyRefs(src) {
            return src ? [].concat(src) : [];
        }

        function resize() {
            function _resize() {
                ng.forEach(cols, function (c) {
                    c.onResize();
                });
            }

            $timeout(_resize, 10, true);
        }

        $scope.$watchCollection("meta.ctx.lst", update$src);
        win.on('resize', resize);

        this.addCol = function (col) {
            cols.push(col);
            col.$on('$destroy', function (event) {
                ctrl.del(col);
            });
        };
        this.del = function (col) {
            var index = cols.indexOf(col);
            if (index !== -1) {
                cols.splice(index, 1);
            }
        };

        this.sortBy = function sortBy(predicate, reverse) {
            tableState.sort.predicate = predicate;
            tableState.sort.reverse = reverse === true;
            return this.pipe();
        };

        $scope.pager = function (p) {
            $scope.meta.filter.page = p;
            $scope.meta.ctx.refresh($scope.meta.filter);
        };
        this.filter = function () {
            var groups = [];
            ng.forEach($scope.meta.cols, function (c) {
                if (c.filter !== undefined) {
                    groups.push(c.filter);
                }
            });
            $scope.meta.filter.groups = groups;
            console.log($scope.meta.filter);
            $scope.meta.ctx.refresh($scope.meta.filter);
        };

        this.pipe = function pipe() {
            filtered = copyRefs($scope.meta.ctx.lst);
            if (tableState.sort.predicate) {
                filtered = orderBy(filtered, tableState.sort.predicate, tableState.sort.reverse);
            }
            $scope.$src = filtered;
        };

        this.bodyTr = function () {
            var tr = '<tr ng-repeat="$row in $src">';
            ng.forEach($scope.meta.cols, function (c) {
                tr+=buildTd(c);
            });
            tr += '</tr>';
            return tr;
        };


        $scope.$on('$destroy', function (event) {
            win.off('resize', resize);
        });

        function buildTd(c) {
            var td, tdAttr,
                tdBody = fmt('{{$row.{0}}}', c.field),
                td_fmt = '<td>{0}</td>',
                td_fmt_attr = '<td {0}>{1}</td>';

            if (c.celltpl) {
                tdBody = c.celltpl;
            }
            else if (c.field) {
                if (c.type === 'int') {
                    tdAttr = 'class="text-right text-middle"';
                }
                else if (c.type === 'date') {
                    tdBody = fmt('{{$row.{0}|date}}', c.field);
                }
                else if (c.type === 'jbzd') {
                    tdAttr = fmt('jb-zd="{0}" jb-zd-dm="$row.{1}"', c.jbzd, c.field);
                }
            }

            if (tdAttr) td = fmt(td_fmt_attr, tdAttr, tdBody);
            else td = fmt(td_fmt, tdBody);

            return td;
        }
    }

    module.directive('jbTable2',function($compile,$q,$parse) {
            return {
                replace: true,

                templateUrl: 'jb/ui/table/table.tpl.html',
                scope:{
                    meta:'=jbMeta'
                },
                controller: tableCtr,
                link: function (scope, element, attrs, ctrl) {

                }
            };
        }
    );
    module.directive('jbTableTh', function () {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    ctrl.addCol(scope);
                    scope.onResize = function () {
                        scope.col.width = element[0].clientWidth;
                    };
                }
            };
        }
    );
    module.directive('jbTableCol', function ($compile, $q, $parse, $jbFilter) {
            return {
                require: '^jbTable2',
                restrict: "C",
                replace: true,
                templateUrl: 'jb/ui/table/th.tpl.html',
                link: function (scope, element, attrs, ctrl) {
                    scope.$index = 0;
                    scope.pop = {
                        filterOpt: strFilterOpt,
                        filterCondition: strFilterCondition
                    };
                    scope.onTitle = function () {
                        if (scope.col.sort !== undefined) sort();
                    };
                    scope.onFilter = function () {
                        ctrl.filter();
                    };

                    if (scope.col.filter === true) {
                        scope.col.filter = $jbFilter.group2(null, scope.col.field);
                    }
                    function sort() {
                        scope.$index++;
                        ctrl.sortBy(scope.col.field, scope.$index % 2 === 0);
                    }
                }
            };
        }
    );

    module.directive('jbTableBody', function ($compile, $q, $parse) {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    var content = $compile(ctrl.bodyTr())(scope);
                    element.append(content);
                }
            };
        }
    );
})(angular);
