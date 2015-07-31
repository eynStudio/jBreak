(function (ng) {
    var module = ng.module('jb.zd', ['jb.res']);

    module.provider('$jbZd', function () {

        this.$get = function ($cacheFactory, jbRes, $q) {
            var zd = $cacheFactory('jbZd');
            var res = jbRes('/api/IbZd/:id', {id: '@id'});

            function get(bq) {
                var d = $q.defer();
                var lst = zd.get(bq);

                if (lst) d.resolve(lst);
                else {
                    res.query({bq: bq}, function (data) {
                        zd.put(bq, data);
                        d.resolve(data);
                    });
                }
                return d.promise;
            }

            return {
                get: get
            };
        };
    });

    module.directive('jbSelectZd', function ($jbZd) {
        return {
            replace: true,
            scope: {
                jbSelectZd: '@'
            },
            template: '<select class="form-control" ng-options="zd.Dm as zd.Mc for zd in $src"></select>',
            link: function (scope, element, attrs) {
                $jbZd.get(scope.jbSelectZd).then(function (data) {
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
            template: '<span>{{zd.Mc}}</span>',
            link: function (scope, element, attrs) {

                $jbZd.get(scope.jbZd).then(function (data) {
                    scope.zd = getZd(data);
                });

                function getZd(src) {
                    for (var i = 0, l = src.length; i < l; i++) {
                        if (src[i].Dm == scope.jbZdDm) return src[i];
                    }
                    return null;
                }
            }
        };
    });


})(angular);