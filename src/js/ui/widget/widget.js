(function() {
    var module = angular.module('jb.ui.widget', []);

    var ctrl = ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        var self = this;
        var lst=[];
        $element.addClass('panel-group');
        this.add=function(wg){
            lst.push(wg);
            wg.$on('$destroy', function (event) {
                self.del(wg);
            });
        };
        this.del = function (wg) {
            var index = lst.indexOf(wg);
            if (index !== -1) {
                lst.splice(index, 1);
            }
        };

        this.closeOthers = function (openWg) {
            var multiple = $scope.$eval($attrs.jbWidgets);
            if (!multiple) {
                angular.forEach(lst, function (wg) {
                    if (wg !== openWg) {
                        wg.isHide=true;
                    }
                });
            }
        };
    }];
    module.directive('jbWidgets', function(){
        return {
            controller: ctrl
        };
    });

    module.directive('jbWidget', function(){
        return {
            restrict: 'EA',
            require: '^?jbWidgets',
            transclude: true,
            replace: true,
            templateUrl: 'jb/ui/widget/widget.tpl.html',
            scope: {
                title: '@',
                isHide: '=?',
                showFoot:'=',
                ctx: '=?jbCtx'
            },
            link: function (scope, element, attrs, ctrls) {
                var ctrl=ctrls;
                if(ctrl) {
                    ctrl.add(scope);
                    scope.$watch('isHide', function (value) {
                        if (!value) {
                            ctrl.closeOthers(scope);
                        }
                    });
                }
                scope.$toggle = function () {
                    scope.isHide = !scope.isHide;
                };
            }
        };
    });

})();