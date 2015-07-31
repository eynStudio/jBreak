angular.module('jb.ui')
    .directive('jbRadioList', function ($parse) {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/radioList/radioList.tpl.html",
            link: function (scope, element, attrs) {
                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.selection = '';
                scope.otherVal = '';
                setup(scope.jbVal);
                function setup(val) {
                    if (val) {
                        if (scope.jbSrc.indexOf(val) > -1) {
                            scope.selection = val;
                        } else if (scope.jbOther) {
                            scope.selection = 'other';
                            scope.otherVal = val;
                        } else {
                            scope.selection = '';
                            scope.otherVal = '';
                        }
                    }
                }

                function updateJbVal() {
                    scope.jbVal = scope.selection === 'other'? scope.otherVal: scope.selection;
                }

                scope.select = function select(val) {
                    scope.selection = val;
                    if (val !== 'other') {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };

                scope.$watch('otherVal', function (newval) {
                    if (newval) {
                        scope.selection = 'other';
                    }
                    updateJbVal();
                });

                scope.$watch('jbVal', setup);
            }
        };
    });
