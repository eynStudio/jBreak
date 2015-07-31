(function (ng) {
    "use strict";

    var module = ng.module('jb.ui.table');

    function tableCtr($scope) {

    }

    module.directive('jbTable', ['$compile', '$q', '$parse',
        function($compile,$q,$parse) {
            return {
                scope:{},
                restrict: "A",
                controller: tableCtr,
                compile: function (tElement, tAttrs, transclude) {
                    var columns = [], i = 0, row = null;
                    angular.forEach(angular.element(tElement.find('tr')), function (tr) {
                        tr = angular.element(tr);
                        if (!tr.hasClass('jb-table-add') && !row) {
                            row = tr;
                        }
                    });
                    if (!row) {
                        return;
                    }
                    angular.forEach(row.find('td'), function (item) {
                        var el = angular.element(item);

                        var parsedAttribute = function (attr, defaultValue) {
                            return function (scope) {
                                return $parse(el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr))(scope, {
                                        $columns: columns
                                    }) || defaultValue;
                            };
                        };

                        var parsedTitle = parsedAttribute('title', ' ');

                        columns.push({
                            id: i++,
                            title: parsedTitle()
                        });
                    });

                    return function (scope, iElement, iAttrs) {
                        scope.$columns = columns;
                        scope.headerTpl = 'jb/ui/table/tableHeader.tpl.html';
                        var headerTemplate = angular.element(document.createElement('thead')).attr('ng-include', 'headerTpl');
                        iElement.addClass('jb-table')
                            .prepend(headerTemplate);

                        $compile(headerTemplate)(scope);
                    };
                }
            };
        }
    ]);


})(angular);
