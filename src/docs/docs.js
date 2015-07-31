angular.module('jbdemo', ['ngRoute', 'jb.ui', 'ngSanitize', 'jb.ctx', 'demo.tpls', 'ui.router', 'jb.zd'])
    .factory('phoneCtx',function(jbCtxP){
        var ctx=jbCtxP('/api/phones/:id',{ id: '@id' });

        return ctx;
    })
;