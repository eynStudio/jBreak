angular.module('jb.ui')
    .directive('jbCheckList', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/checkList/checkList.tpl.html",
            link: function (scope, element, attrs) {

                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }

                setup(scope.jbVal);

                function setup(val) {
                    var other = [];
                    scope.selection = [];
                    val.split(';').forEach(function (item) {
                        if (scope.jbSrc.indexOf(item) > -1) {
                            scope.selection.push(item);
                        } else if (scope.jbOther && item) {
                            other.push(item);
                        }
                    });
                    scope.otherCk = (other.length>0);
                    scope.otherVal =other.join(';');
                }

                function updateJbVal() {
                    var val = scope.selection;
                    if (scope.jbOther && scope.otherVal) {
                        val.push(scope.otherVal);
                    }
                    scope.jbVal = val.join(';');
                }

                scope.toggleOther = function toggleOther() {
                    scope.otherCk = !scope.otherCk;
                    if (!scope.otherCk) {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };
                scope.toggleSelection = function toggleSelection(item) {
                    var idx = scope.selection.indexOf(item);
                    if (idx > -1) {
                        scope.selection.splice(idx, 1);
                    }
                    else {
                        scope.selection.push(item);
                    }
                    updateJbVal();
                };
                scope.$watch('otherVal', function (newval) {
                    scope.otherCk = !!newval;
                    updateJbVal();
                });
                scope.$watch('jbVal', setup);
            }
        };
    });
