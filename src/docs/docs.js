angular.module('jbdemo', ['ngRoute', 'jb.ui', 'ngSanitize', 'jb.ctx', 'demo.tpls', 'e2e-mocks', 'ui.router', 'jb.zd'])
    .factory('phoneCtx',function(jbCtxP){
        var ctx=jbCtxP('/api/phones/:id',{ id: '@id' });

        return ctx;
    })
;