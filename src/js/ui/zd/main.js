(function () {
    var module = angular.module('jb.ui');

    module.directive('jbSeleZd', function ($jbZd) {
        return {
            replace: true,
            scope: {
                jbSeleZd: '@'
            },
            templateUrl: 'jb/ui/zd/zd.tpl.html',
            link: function (scope, element, attrs) {
                $jbZd.get(scope.jbSeleZd).then(function (data) {
                    scope.$src = data;
                });
            }
        };
    });

    module.directive('jbZd', function ($jbZd) {
        return {
            scope: {
                jbZd: '@',
                jbZdDm: '='
            },
            template: '{{zd.Mc}}',
            link: function (scope, element, attrs) {
                scope.$watch('jbZdDm', updateZd);

                function updateZd() {
                    if (scope.jbZdDm)
                        $jbZd.get(scope.jbZd).then(function (data) {
                            scope.zd = _.find(data, {'Dm': scope.jbZdDm});
                        });
                }
            }
        };
    });

})();