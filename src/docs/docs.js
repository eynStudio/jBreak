angular.module('jbdemo', ['ngRoute', 'jb.ui', 'ngSanitize', 'jb.ctx', 'demo.tpls', 'ui.router', 'jb.zd'])
    .factory('phoneCtx',function($jbCtx){
        var ctx=$jbCtx.page('phones');

        return ctx;
    })
    .run(function(Restangular){
        Restangular.setBaseUrl('/api');

    })
;