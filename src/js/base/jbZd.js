(function (ng) {
    var module = ng.module('jb.zd', ['restangular']);

    module.provider('$jbZd', function () {
        this.$get = function ($cacheFactory, Restangular, $q) {
            var zd = $cacheFactory('jbZd');
            return {
                get: get
            };

            function get(bq) {
                var lst = zd.get(bq);
                if (lst) return $q.when(lst);

                return Restangular.allUrl('jbzd', '/api/jbzd/bq/' + bq).getList().then(function (data) {
                    zd.put(bq, data.plain());
                    return data.plain();
                });
            }
        };
    });

    module.directive('jbSeleZd', function ($jbZd) {
        return {
            replace: true,
            scope: {
                jbSeleZd: '@'
            },
            template: '<select class="form-control" ng-options="zd.Dm as zd.Mc for zd in $src"></select>',
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
                jbZdDm: '=',
                jbZdJc:'='
            },
            template: '{{zd.Mc}}',
            link: function (scope, element, attrs) {
                scope.$watch('jbZdDm', updateZd);

                function updateZd() {
                    if (scope.jbZdDm)
                        $jbZd.get(scope.jbZd).then(function (data) {
                            scope.zd = scope.jbZdJc ? _.find(data, {'Jc': scope.jbZdDm}) : _.find(data, {'Dm': scope.jbZdDm});
                        });
                }
            }
        };
    });

})(angular);