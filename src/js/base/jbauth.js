(function(ng) {
    var module = ng.module('jb.auth', ['ui.router', 'LocalStorageModule']);

    module.factory('jbAuthUser', function (localStorageService) {
        function Xm() {
            return localStorageService.get('user');
        }

        return {
            Xm: Xm,
            isAuth: function () {
                return !!Xm();
            }
        };
    });

    module.provider('jbAuth', function () {
        var buffer = [], nextPath;

        function pushToBuffer(config, deferred, curPath) {
            buffer.push({
                config: config,
                deferred: deferred
            });
            if (curPath && (curPath != "/login")) {
                nextPath = curPath;
            }
        }

        this.$get = function ($rootScope, $injector, $location, $cookies, jbAuthUser, localStorageService) {
            var $http; //initialized later because of circular dependency problem
            function retry(config, deferred) {
                $http = $http || $injector.get('$http');
                $http(config).then(function (response) {
                    deferred.resolve(response);
                });
            }

            function retryAll() {
                for (var i = 0; i < buffer.length; ++i) {
                    retry(buffer[i].config, buffer[i].deferred);
                }
                buffer = [];
            }

            return {
                pushToBuffer: pushToBuffer,
                loginConfirmed: function (id, name) {
                    localStorageService.set('token', id);
                    localStorageService.set('user', name);
                    $rootScope.$broadcast('event:authConfirmed');
                    retryAll();
                    if (nextPath) {
                        $location.path(nextPath);
                    }
                },
                logoutSuccess: function () {
                    localStorageService.clearAll();
                    $rootScope.$broadcast('event:authLogout');
                }
            };
        };
    });

    module.factory('jbAuthInterceptor', function ($rootScope, $q, $location, jbAuth, localStorageService) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                var token = localStorageService.get("token");
                if (token !== null) {
                    config.headers.Authorization = 'jBreak ' + token;
                }
                return config;
            },
            //'requestError': function(rejection) {
            //    if (canRecover(rejection)) {
            //        return responseOrNewPromise
            //    }
            //    return $q.reject(rejection);
            //},
            //'response': function(response) {
            //
            //    return response;
            //},
            'responseError': function (rejection) {
                if (rejection.status === 403) {//Forbidden  401: Unauthorized
                    var deferred = $q.defer();
                    jbAuth.pushToBuffer(rejection.config, deferred, $location.path());
                    $rootScope.$broadcast('event:authRequest');
                    return deferred.promise;
                }
                return $q.reject(rejection);
            }
        };
    });

    module.config(function ($httpProvider) {
        $httpProvider.interceptors.push('jbAuthInterceptor');
    });

})(angular);