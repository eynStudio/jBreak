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

})(angular);