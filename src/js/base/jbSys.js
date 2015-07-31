angular.module('jb.sys', [])
    .factory('jbSys', function ($rootScope) {
        $rootScope.back = function () {
            window.history.back();
        };
        var sys = {
            curCtx: undefined
        };
        $rootScope.sys = sys;
        return sys;
    });
