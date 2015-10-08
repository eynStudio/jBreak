angular.module('jBreak', ['LocalStorageModule', 'ngLocale', 'jb',  'jb.auth', 'jb.ctx','jb.filter', 'jb.ui', 'jb.zd'])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('jBreak')
            .setNotify(true, true);
    });
