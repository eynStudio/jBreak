angular.module('jBreak', ['LocalStorageModule', 'ngLocale', 'jb', 'jb.sys', 'jb.auth', 'jb.ctx', 'jb.res', 'jb.filter', 'jb.ui', 'jb.zd'])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('jBreak')
            .setNotify(true, true);
    });
