angular.module('jb.ui')
    .directive('jbInputGroupDropdownBtn', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '='},
            replace: true,
            templateUrl: "jb/ui/inputGroupDropdownBtn/inputGroupDropdownBtn.tpl.html",
            link: function (scope, element, attrs) {
                if (!Array.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.update = function updateJbVal(val) {
                    scope.jbVal = val;
                };
            }
        };
    });
