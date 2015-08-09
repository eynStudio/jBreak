'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u4e0a\u5348",
      "\u4e0b\u5348"
    ],
    "DAY": [
      "\u661f\u671f\u65e5",
      "\u661f\u671f\u4e00",
      "\u661f\u671f\u4e8c",
      "\u661f\u671f\u4e09",
      "\u661f\u671f\u56db",
      "\u661f\u671f\u4e94",
      "\u661f\u671f\u516d"
    ],
    "ERANAMES": [
      "\u516c\u5143\u524d",
      "\u516c\u5143"
    ],
    "ERAS": [
      "\u516c\u5143\u524d",
      "\u516c\u5143"
    ],
    "FIRSTDAYOFWEEK": 6,
    "MONTH": [
      "\u4e00\u6708",
      "\u4e8c\u6708",
      "\u4e09\u6708",
      "\u56db\u6708",
      "\u4e94\u6708",
      "\u516d\u6708",
      "\u4e03\u6708",
      "\u516b\u6708",
      "\u4e5d\u6708",
      "\u5341\u6708",
      "\u5341\u4e00\u6708",
      "\u5341\u4e8c\u6708"
    ],
    "SHORTDAY": [
      "\u5468\u65e5",
      "\u5468\u4e00",
      "\u5468\u4e8c",
      "\u5468\u4e09",
      "\u5468\u56db",
      "\u5468\u4e94",
      "\u5468\u516d"
    ],
    "SHORTMONTH": [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708"
    ],
    "WEEKENDRANGE": [
      5,
      6
    ],
    "fullDate": "y\u5e74M\u6708d\u65e5EEEE",
    "longDate": "y\u5e74M\u6708d\u65e5",
    "medium": "y\u5e74M\u6708d\u65e5 ah:mm:ss",
    "mediumDate": "y\u5e74M\u6708d\u65e5",
    "mediumTime": "ah:mm:ss",
    "short": "yy/M/d ah:mm",
    "shortDate": "yy/M/d",
    "shortTime": "ah:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u00a5",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "zh-cn",
  "pluralCat": function(n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
});
}]);

angular.module('jBreak', ['LocalStorageModule', 'ngLocale', 'jb', 'jb.sys', 'jb.auth', 'jb.ctx', 'jb.res', 'jb.filter', 'jb.ui', 'jb.zd'])
    .config(["localStorageServiceProvider", function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('jBreak')
            .setNotify(true, true);
    }]);

(function(ng) {

    var module = ng.module('jb',[]),
        uid = 0;

    module.factory('jb$', function () {
        return {
            nextUid:nextUid,
            fmt:fmt
        };
    });

    function fmt() {
        var theString = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }
        return theString;
    }

    function nextUid() {
        return '_' + (++uid);
    }

})(angular);
angular.module('jb.auth', ['ui.router', 'LocalStorageModule'])
    .factory('jbAuthUser', ["localStorageService", function (localStorageService) {
        function Xm() {
            return localStorageService.get('user');
        }

        var user = {
            Xm: Xm,
            isAuth: function () {
                return !!Xm();
            }
        };
        return user;
    }])
    .provider('jbAuth', function () {
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

        this.$get = ["$rootScope", "$injector", "$location", "$cookies", "jbAuthUser", "localStorageService", function ($rootScope, $injector, $location, $cookies, jbAuthUser, localStorageService) {
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
                pushToBuffer:pushToBuffer,
                loginConfirmed: function (id,name) {
                    localStorageService.set('token',id);
                    localStorageService.set('user',name);
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
        }];
    })
    .factory('jbAuthInterceptor', ["$rootScope", "$q", "$location", "jbAuth", "localStorageService", function ($rootScope,$q,$location,jbAuth,localStorageService) {
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
    }])
    .config(["$httpProvider", "jbAuthProvider", function ($httpProvider, jbAuthProvider) {
        $httpProvider.interceptors.push('jbAuthInterceptor');
    }]);


(function (ng) {
    var module = ng.module('jb.ctx', ['jb.sys', 'jb.res', 'jb.ctx4gp']);

    function updateParams(ctx,params,newParams) {
        ctx.params = newParams ? params : ng.extend(ctx.params, params);
    }

    module.factory('jbCtx', ["jbRes", function (jbRes) {
        return function(url, params, methods) {
            var res = jbRes(url, params, methods);
            var ctx = {
                res: res,
                refresh: refresh,
                save: save,
                get:res.get,
                remove:res.remove
            };
            return ctx;

            function refresh(params,newParams) {
                updateParams(ctx,params,newParams);
                ctx.obj = res.get(ctx.params);
            }

            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx.obj, function (data) {
                    ctx.obj=data;
                });
            }
        }
    }]);

    module.factory('jbCtxL', ["jbRes", function (jbRes) {
        return function(url, params, methods) {
            var defaults = {
                save: {method: 'put', isArray: true}
            };
            methods = ng.extend(defaults, methods);
            var res = jbRes(url, params, methods);
            var ctx = {
                lst: [],
                res: res,
                refresh: refresh,
                add:add,
                edit: edit,
                save: save,
                del:del
            };
            return ctx;

            function refresh(params,newParams) {
                updateParams(ctx,params,newParams);
                ctx.lst = res.query(ctx.params);
            }

            function add() {
                (ctx.beforeAdd || ng.noop)();
                ctx.obj=null;
                ctx._obj=res.create();
            }
            function edit(it) {
                (ctx.beforeEdit || ng.noop)();
                ctx.obj = it;
                ctx._obj = ng.copy(it);
            }
            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx._obj, function (data) {
                    ctx.lst = data;
                    ctx._obj=ctx.obj = null;
                });
            }
            function del(it){
                (ctx.beforeDel || ng.noop)();
                res.del(it,function(data){
                    ctx.lst = data;
                });
            }
        }
    }]);

    module.factory('jbCtxP', ["jbCtxL", function (jbCtxL) {
        return function(url, params, methods) {
            var ctx = jbCtxL(url, params, methods);
            ctx = ng.extend(ctx, {
                refresh: refresh,
                pager: pager,
                total: 0,
                params:{filter: ''},
                filter: {page: 1, perPage: 20}
            });
            return ctx;

            function refresh(filter,params,newParams) {
                if (filter) ctx.filter = filter;
                updateParams(ctx,params,newParams);
                ctx.res.post(ctx.params, ctx.filter, function (data) {
                    ctx.lst = data.Items;
                    ctx.total = data.Total;
                });
            }

            function pager(page) {
                ctx.filter.page = page;
                refresh();
            }
        }
    }]);

})(angular);
(function (ng) {
    //4gp  for get and post only
    var module = ng.module('jb.ctx4gp', ['jb.sys', 'jb.res']);

    module.factory('jbCtx4gp', ["jbSys", "jbResGP", function (jbSys, jbResGP) {
        function get(url, params, methods) {

            var res = jbResGP(url, params, methods);
            var ctx = {
                res: res,
                lst: [],
                sys: jbSys,
                asCur: asCur,
                refresh: refresh,
                edit: edit,
                save: save,
                pager: pager,
                page: 1
            };
            return ctx;

            function refresh() {
                ctx.paging = res.page({page: ctx.page});
            }

            function pager(page) {
                ctx.page = page;
                refresh();
            }

            function edit(idx) {
                ctx.editIdx = idx;
                ctx.editItem = idx === -1 ? res.create() : ctx.editItem = angular.copy(ctx.paging.Items[idx]);
            }

            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx.editItem, function () {
                    ctx.refresh();
                    ctx.editIdx = null;
                });
            }

            function asCur() {
                jbSys.curCtx = ctx;
            }
        }

        return get;
    }]);

    module.factory('jbCtxP4gp', ["jbResGP", function (jbResGP) {
        function get(url, params, methods) {
            var res = jbResGP(url, params, methods);
            var ctx = {
                lst: [],
                res: res,
                refresh: refresh,
                edit: edit,
                save: save,
                pager: pager,
                total: 0,
                filter: {page: 1, perPage: 20}
            };
            return ctx;

            function refresh(filter) {
                if (filter) ctx.filter = filter;
                res.post({filter: ''}, ctx.filter, function (data) {
                    ctx.lst = data.Items;
                    ctx.total = data.Total;
                });
            }

            function pager(page) {
                ctx.filter.page = page;
                refresh();
            }

            function edit(idx) {
                ctx.editIdx = idx;
                ctx.editItem = idx === -1 ? res.create() : ctx.editItem = ng.copy(ctx.lst[idx]);
            }

            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx.editItem, function (data) {
                    ctx.refresh();
                    ctx.editIdx = null;
                });
            }

        }

        return get;
    }]);

    module.factory('jbCtxL4gp', ["jbResGP", function (jbResGP) {
        function get(url, params, methods) {
            var defaults = {
                save: {method: 'post', isArray: true, params: {save_: true}}
            };
            methods = ng.extend(defaults, methods);
            var res = jbResGP(url, params, methods);
            var ctx = {
                lst: [],
                res: res,
                refresh: refresh,
                edit: edit,
                save: save,
                del: del
            };
            return ctx;

            function refresh() {
                ctx.lst = res.query();
            }

            function edit(idx) {
                ctx.editIdx = idx;
                ctx.editItem = idx === -1 ? res.create() : ctx.editItem = ng.copy(ctx.lst[idx]);
            }

            function del(id) {
                ctx.editIdx = null;
                ctx.lst = res.del({id: id}, {});
            }
            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx.editItem, function (data) {
                    ctx.lst = data;
                    ctx.editIdx = null;
                });
            }

        }

        return get;
    }]);

})(angular);
(function (ng) {
    "use strict";
    var module = ng.module('jb.filter', []);

    module.provider('$jbFilter', function () {

        this.$get = function () {

            return {
                rule: makeRule,
                group: makeGroup,
                group2: makeGroup2
            };
        };
    });

    function makeGroup(condition, rule1, rule2) {
        return {
            Condition: condition || 'NONE',
            Rules: [rule1, rule2]
        };
    }

    function makeGroup2(condition, field, opt) {
        return makeGroup(condition, makeRule(field, opt), makeRule(field, opt));
    }

    function makeRule(field,opt,val1,val2){
        var re = {
            Field: field,
            Opt: opt||'contains',
            Val1: val1||'',
            Val2: val2||''
        };
        re.hello = function () {
            console.log('hi');
        };
        return re;
    }
})(angular);
(function(ng){

    var module=ng.module('jb.res', [ 'ngResource' ] );

    module.factory('jbRes', ["$resource", function ($resource) {
        return  function( url, params, methods ) {
            var defaults = {
                create: { method: 'post' },
                save: { method: 'put' },
                add: {method: 'put', isArray: true},
                del: {method: 'delete', isArray: true},
                update: { method: 'post', isArray: true },
                post: {method: 'post'},
                page: {method: 'get', params: {page: 1}}
            };
            methods = angular.extend( defaults, methods );
            return $resource(url, params, methods);
        };
    }]);

    //jb.res for only get & post
    module.factory('jbResGP', ["$resource", function ($resource) {
        return function (url, params, methods) {
            var defaults = {
                create: {method: 'post', params: {new_: true}},
                save: {method: 'post', params: {save_: true}},
                add: {method: 'post', isArray: true, params: {add_: true}},
                del: {method: 'post', isArray: true, params: {del_: true}},
                update: {method: 'post', isArray: true},
                post: {method: 'post'},
                page: {method: 'get', params: {page: 1}},
                remove: {method: 'post', params: {del_: true}},
                delete: {method: 'post', params: {del_: true}}
            };
            methods = angular.extend(defaults, methods);
            return $resource(url, params, methods);
        };
    }]);

})(angular);
angular.module('jb.sys', [])
    .factory('jbSys', ["$rootScope", function ($rootScope) {
        $rootScope.back = function () {
            window.history.back();
        };
        var sys = {
            curCtx: undefined
        };
        $rootScope.sys = sys;
        return sys;
    }]);

(function (ng) {
    var module = ng.module('jb.zd', ['jb.res']);

    module.provider('$jbZd', function () {

        this.$get = ["$cacheFactory", "jbRes", "$q", function ($cacheFactory, jbRes, $q) {
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
        }];
    });

    module.directive('jbSelectZd', ["$jbZd", function ($jbZd) {
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
    }]);

    module.directive('jbZd', ["$jbZd", function ($jbZd) {
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
    }]);


})(angular);
angular.module('jb.be', []);

angular.module('jb.ui', ['ngLocale', 'jb.ui.tpls', 'jb.util', 'jb', 'jb.ui.table', 'jb.zd', 'jb.ui.widget']);

angular.module('jb.util.dateParser', [])
    .provider('$jbDateParser', ["$localeProvider", function ($localeProvider) {

        // define a custom ParseDate object to use instead of native Date
        // to avoid date values wrapping when setting date component values
        function ParseDate() {
            this.year = 1970;
            this.month = 0;
            this.day = 1;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.milliseconds = 0;
        }

        ParseDate.prototype.setMilliseconds = function (value) {
            this.milliseconds = value;
        };
        ParseDate.prototype.setSeconds = function (value) {
            this.seconds = value;
        };
        ParseDate.prototype.setMinutes = function (value) {
            this.minutes = value;
        };
        ParseDate.prototype.setHours = function (value) {
            this.hours = value;
        };
        ParseDate.prototype.getHours = function () {
            return this.hours;
        };
        ParseDate.prototype.setDate = function (value) {
            this.day = value;
        };
        ParseDate.prototype.setMonth = function (value) {
            this.month = value;
        };
        ParseDate.prototype.setFullYear = function (value) {
            this.year = value;
        };
        ParseDate.prototype.fromDate = function (value) {
            this.year = value.getFullYear();
            this.month = value.getMonth();
            this.day = value.getDate();
            this.hours = value.getHours();
            this.minutes = value.getMinutes();
            this.seconds = value.getSeconds();
            this.milliseconds = value.getMilliseconds();
            return this;
        };

        ParseDate.prototype.toDate = function () {
            return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
        };

        var proto = ParseDate.prototype;

        function noop() {
        }

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        function indexOfCaseInsensitive(array, value) {
            var len = array.length, str = value.toString().toLowerCase();
            for (var i = 0; i < len; i++) {
                if (array[i].toLowerCase() === str) {
                    return i;
                }
            }
            return -1; // Return -1 per the "Array.indexOf()" method.
        }

        var defaults = this.defaults = {
            format: 'shortDate',
            strict: false
        };

        this.$get = ["$locale", "dateFilter", function ($locale, dateFilter) {

            var DateParserFactory = function (config) {

                var options = angular.extend({}, defaults, config);

                var $dateParser = {};

                var regExpMap = {
                    'sss': '[0-9]{3}',
                    'ss': '[0-5][0-9]',
                    's': options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
                    'mm': '[0-5][0-9]',
                    'm': options.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]',
                    'HH': '[01][0-9]|2[0-3]',
                    'H': options.strict ? '1?[0-9]|2[0-3]' : '[01]?[0-9]|2[0-3]',
                    'hh': '[0][1-9]|[1][012]',
                    'h': options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
                    'a': 'AM|PM',
                    'EEEE': $locale.DATETIME_FORMATS.DAY.join('|'),
                    'EEE': $locale.DATETIME_FORMATS.SHORTDAY.join('|'),
                    'dd': '0[1-9]|[12][0-9]|3[01]',
                    'd': options.strict ? '[1-9]|[1-2][0-9]|3[01]' : '0?[1-9]|[1-2][0-9]|3[01]',
                    'MMMM': $locale.DATETIME_FORMATS.MONTH.join('|'),
                    'MMM': $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
                    'MM': '0[1-9]|1[012]',
                    'M': options.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]',
                    'yyyy': '[1]{1}[0-9]{3}|[2]{1}[0-9]{3}',
                    'yy': '[0-9]{2}',
                    'y': options.strict ? '-?(0|[1-9][0-9]{0,3})' : '-?0*[0-9]{1,4}',
                };

                var setFnMap = {
                    'sss': proto.setMilliseconds,
                    'ss': proto.setSeconds,
                    's': proto.setSeconds,
                    'mm': proto.setMinutes,
                    'm': proto.setMinutes,
                    'HH': proto.setHours,
                    'H': proto.setHours,
                    'hh': proto.setHours,
                    'h': proto.setHours,
                    'EEEE': noop,
                    'EEE': noop,
                    'dd': proto.setDate,
                    'd': proto.setDate,
                    'a': function (value) {
                        var hours = this.getHours() % 12;
                        return this.setHours(value.match(/pm/i) ? hours + 12 : hours);
                    },
                    'MMMM': function (value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.MONTH, value));
                    },
                    'MMM': function (value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.SHORTMONTH, value));
                    },
                    'MM': function (value) {
                        return this.setMonth(1 * value - 1);
                    },
                    'M': function (value) {
                        return this.setMonth(1 * value - 1);
                    },
                    'yyyy': proto.setFullYear,
                    'yy': function (value) {
                        return this.setFullYear(2000 + 1 * value);
                    },
                    'y': proto.setFullYear
                };

                var regex, setMap;

                $dateParser.init = function () {
                    $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format;
                    regex = regExpForFormat($dateParser.$format);
                    setMap = setMapForFormat($dateParser.$format);
                };

                $dateParser.isValid = function (date) {
                    if (angular.isDate(date)) return !isNaN(date.getTime());
                    return regex.test(date);
                };

                $dateParser.parse = function (value, baseDate, format) {
                    // check for date format special names
                    if (format) format = $locale.DATETIME_FORMATS[format] || format;
                    if (angular.isDate(value)) value = dateFilter(value, format || $dateParser.$format);
                    var formatRegex = format ? regExpForFormat(format) : regex;
                    var formatSetMap = format ? setMapForFormat(format) : setMap;
                    var matches = formatRegex.exec(value);
                    if (!matches) return false;
                    // use custom ParseDate object to set parsed values
                    var date = baseDate && !isNaN(baseDate.getTime()) ? new ParseDate().fromDate(baseDate) : new ParseDate().fromDate(new Date(1970, 0, 1, 0));
                    for (var i = 0; i < matches.length - 1; i++) {
                        if (formatSetMap[i]) formatSetMap[i].call(date, matches[i + 1]);
                    }
                    // convert back to native Date object
                    var newDate = date.toDate();

                    // check new native Date object for day values overflow
                    if (parseInt(date.day, 10) !== newDate.getDate()) {
                        return false;
                    }

                    return newDate;
                };

                $dateParser.getDateForAttribute = function (key, value) {
                    var date;

                    if (value === 'today') {
                        var today = new Date();
                        date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (key === 'maxDate' ? 1 : 0), 0, 0, 0, (key === 'minDate' ? 0 : -1));
                    } else if (angular.isString(value) && value.match(/^".+"$/)) { // Support {{ dateObj }}
                        date = new Date(value.substr(1, value.length - 2));
                    } else if (isNumeric(value)) {
                        date = new Date(parseInt(value, 10));
                    } else if (angular.isString(value) && 0 === value.length) { // Reset date
                        date = key === 'minDate' ? -Infinity : +Infinity;
                    } else {
                        date = new Date(value);
                    }

                    return date;
                };

                $dateParser.getTimeForAttribute = function (key, value) {
                    var time;

                    if (value === 'now') {
                        time = new Date().setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && value.match(/^".+"$/)) {
                        time = new Date(value.substr(1, value.length - 2)).setFullYear(1970, 0, 1);
                    } else if (isNumeric(value)) {
                        time = new Date(parseInt(value, 10)).setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && 0 === value.length) { // Reset time
                        time = key === 'minTime' ? -Infinity : +Infinity;
                    } else {
                        time = $dateParser.parse(value, new Date(1970, 0, 1, 0));
                    }

                    return time;
                };

                /* Handle switch to/from daylight saving.
                 * Hours may be non-zero on daylight saving cut-over:
                 * > 12 when midnight changeover, but then cannot generate
                 * midnight datetime, so jump to 1AM, otherwise reset.
                 * @param  date  (Date) the date to check
                 * @return  (Date) the corrected date
                 *
                 * __ copied from jquery ui datepicker __
                 */
                $dateParser.daylightSavingAdjust = function (date) {
                    if (!date) {
                        return null;
                    }
                    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
                    return date;
                };

                // Private functions

                function setMapForFormat(format) {
                    var keys = Object.keys(setFnMap), i;
                    var map = [], sortedMap = [];
                    // Map to setFn
                    var clonedFormat = format;
                    for (i = 0; i < keys.length; i++) {
                        if (format.split(keys[i]).length > 1) {
                            var index = clonedFormat.search(keys[i]);
                            format = format.split(keys[i]).join('');
                            if (setFnMap[keys[i]]) {
                                map[index] = setFnMap[keys[i]];
                            }
                        }
                    }
                    // Sort result map
                    angular.forEach(map, function (v) {
                        // conditional required since angular.forEach broke around v1.2.21
                        // related pr: https://github.com/angular/angular.js/pull/8525
                        if (v) sortedMap.push(v);
                    });
                    return sortedMap;
                }

                function escapeReservedSymbols(text) {
                    return text.replace(/\//g, '[\\/]').replace('/-/g', '[-]').replace(/\./g, '[.]').replace(/\\s/g, '[\\s]');
                }

                function regExpForFormat(format) {
                    var keys = Object.keys(regExpMap), i;

                    var re = format;
                    // Abstract replaces to avoid collisions
                    for (i = 0; i < keys.length; i++) {
                        re = re.split(keys[i]).join('${' + i + '}');
                    }
                    // Replace abstracted values
                    for (i = 0; i < keys.length; i++) {
                        re = re.split('${' + i + '}').join('(' + regExpMap[keys[i]] + ')');
                    }
                    format = escapeReservedSymbols(format);

                    return new RegExp('^' + re + '$', ['i']);
                }

                $dateParser.init();
                return $dateParser;

            };

            return DateParserFactory;

        }];

    }])
    .service('$jbDateFormatter', ["$locale", "dateFilter", function ($locale, dateFilter) {
        // The unused `lang` arguments are on purpose. The default implementation does not
        // use them and it always uses the locale loaded into the `$locale` service.
        // Custom implementations might use it, thus allowing different directives to
        // have different languages.

        this.getDefaultLocale = function () {
            return $locale.id;
        };

        // Format is either a data format name, e.g. "shortTime" or "fullDate", or a date format
        // Return either the corresponding date format or the given date format.
        this.getDatetimeFormat = function (format, lang) {
            return $locale.DATETIME_FORMATS[format] || format;
        };

        this.weekdaysShort = function (lang) {
            return $locale.DATETIME_FORMATS.SHORTDAY;
        };

        function splitTimeFormat(format) {
            return /(h+)([:\.])?(m+)[ ]?(a?)/i.exec(format).slice(1);
        }

        // h:mm a => h
        this.hoursFormat = function (timeFormat) {
            return splitTimeFormat(timeFormat)[0];
        };

        // h:mm a => mm
        this.minutesFormat = function (timeFormat) {
            return splitTimeFormat(timeFormat)[2];
        };

        // h:mm a => :
        this.timeSeparator = function (timeFormat) {
            return splitTimeFormat(timeFormat)[1];
        };

        // h:mm a => true, H.mm => false
        this.showAM = function (timeFormat) {
            return !!splitTimeFormat(timeFormat)[3];
        };

        this.formatDate = function (date, format, lang) {
            return dateFilter(date, format);
        };

    }]);
(function() {
    var module = angular.module('jb.util.parseOptions',[]);
    module.provider('$jbParseOptions', function() {

        var defaults = this.defaults = {
            regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
        };

        this.$get = ["$parse", "$q", function ($parse, $q) {

            function ParseOptionsFactory(attr, config) {

                var $parseOptions = {};

                // Common vars
                var options = angular.extend({}, defaults, config);
                $parseOptions.$values = [];

                // Private vars
                var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;

                $parseOptions.init = function () {
                    $parseOptions.$match = match = attr.match(options.regexp);
                    displayFn = $parse(match[2] || match[1]);
                    valueName = match[4] || match[6];
                    keyName = match[5];
                    groupByFn = $parse(match[3] || '');
                    valueFn = $parse(match[2] ? match[1] : valueName);
                        valuesFn = $parse(match[7]);
                };

                $parseOptions.valuesFn = function (scope, controller) {
                    return $q.when(valuesFn(scope, controller))
                        .then(function (values) {
                            $parseOptions.$values = values ? parseValues(values, scope) : {};
                            return $parseOptions.$values;
                        });
                };

                $parseOptions.displayValue = function (modelValue) {
                    var scope = {};
                    scope[valueName] = modelValue;
                    return displayFn(scope);
                };

                // Private functions

                function parseValues(values, scope) {
                    return values.map(function (match, index) {
                        var locals = {}, label, value;
                        locals[valueName] = match;
                        label = displayFn(scope, locals);
                        value = valueFn(scope, locals);
                        return {label: label, value: value, index: index};
                    });
                }

                $parseOptions.init();
                return $parseOptions;

            }

            return ParseOptionsFactory;

        }];
    });
})();
angular.module('jb.util.position', [])
    .factory('$jbPosition', ['$document', '$window', function ($document, $window) {

        function getStyle(el, cssprop) {
            if (el.currentStyle) { //IE
                return el.currentStyle[cssprop];
            } else if ($window.getComputedStyle) {
                return $window.getComputedStyle(el)[cssprop];
            }
            // finally try and get inline style
            return el.style[cssprop];
        }

        /**
         * Checks if a given element is statically positioned
         * @param element - raw DOM element
         */
        function isStaticPositioned(element) {
            return (getStyle(element, 'position') || 'static' ) === 'static';
        }

        /**
         * returns the closest, non-statically positioned parentOffset of a given element
         * @param element
         */
        var parentOffsetEl = function (element) {
            var docDomEl = $document[0];
            var offsetParent = element.offsetParent || docDomEl;
            while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || docDomEl;
        };

        return {
            /**
             * Provides read-only equivalent of jQuery's position function:
             * http://api.jquery.com/position/
             */
            position: function (element) {
                var elBCR = this.offset(element);
                var offsetParentBCR = {top: 0, left: 0};
                var offsetParentEl = parentOffsetEl(element[0]);
                if (offsetParentEl != $document[0]) {
                    offsetParentBCR = this.offset(angular.element(offsetParentEl));
                    offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
                    offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
                }

                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: elBCR.top - offsetParentBCR.top,
                    left: elBCR.left - offsetParentBCR.left
                };
            },

            /**
             * Provides read-only equivalent of jQuery's offset function:
             * http://api.jquery.com/offset/
             */
            offset: function (element) {
                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
                    left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
                };
            },

            /**
             * Provides coordinates for the targetEl in relation to hostEl
             */
            positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

                var positionStrParts = positionStr.split('-');
                var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

                var hostElPos,
                    targetElWidth,
                    targetElHeight,
                    targetElPos;

                hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

                targetElWidth = targetEl.prop('offsetWidth');
                targetElHeight = targetEl.prop('offsetHeight');

                var shiftWidth = {
                    center: function () {
                        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                    },
                    left: function () {
                        return hostElPos.left;
                    },
                    right: function () {
                        return hostElPos.left + hostElPos.width;
                    }
                };

                var shiftHeight = {
                    center: function () {
                        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                    },
                    top: function () {
                        return hostElPos.top;
                    },
                    bottom: function () {
                        return hostElPos.top + hostElPos.height;
                    }
                };

                switch (pos0) {
                    case 'right':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: shiftWidth[pos0]()
                        };
                        break;
                    case 'left':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: hostElPos.left - targetElWidth
                        };
                        break;
                    case 'bottom':
                        targetElPos = {
                            top: shiftHeight[pos0](),
                            left: shiftWidth[pos1]()
                        };
                        break;
                    default:
                        targetElPos = {
                            top: hostElPos.top - targetElHeight,
                            left: shiftWidth[pos1]()
                        };
                        break;
                }

                return targetElPos;
            }
        };
    }]);
angular.module('jb.util', ['jb.util.dateParser', 'jb.util.position','jb.util.parseOptions']);

angular.module('jb.ui')
    .provider('$jbAside', function () {

        var defaults = this.defaults = {
            animation: 'am-fade-and-slide-right',
            type: 'aside',
            placement: null,
            template: 'jb/ui/aside/aside.tpl.html',
            contentTemplate: false,
            container: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };

        this.$get = ["$jbModal", function ($jbModal) {
            function AsideFactory(config) {
                var $aside = {};
                var options = angular.extend({}, defaults, config);
                $aside = $jbModal(options);
                return $aside;
            }

            return AsideFactory;
        }];
    })

    .directive('jbAside', ["$window", "$sce", "$jbAside", function ($window, $sce, $jbAside) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                        });
                    }
                });

                // Support scope as an object
              if(  attr.jbAside ) {
                  scope.$watch(attr.jbAside, function (newValue, oldValue) {
                      if (angular.isObject(newValue)) {
                          angular.extend(scope, newValue);
                      } else {
                          scope.content = newValue;
                      }
                  }, true);
              }
                // Initialize aside
                var aside = $jbAside(options);

                // Trigger
                element.on(attr.trigger || 'click', aside.toggle);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (aside) aside.destroy();
                    options = null;
                    aside = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .provider('$jbAlert', function () {
        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'alert',
            prefixEvent: 'alert',
            placement: null,
            template: 'jb/ui/alert/alert.tpl.html',
            container: false,
            element: null,
            backdrop: false,
            keyboard: true,
            show: true,
            // Specific options
            duration: false,
            type: false,
            dismissable: true
        };

        this.$get = ["$timeout", "$jbModal", function ($timeout, $jbModal) {
            function AlertFactory(config) {
                var $alert = {};
                var options = angular.extend({}, defaults, config);
                $alert = $jbModal(options);

                // Support scope as string options [/*title, content, */ type, dismissable]
                $alert.$scope.dismissable = !!options.dismissable;
                if (options.type) {
                    $alert.$scope.type = options.type;
                }

                // Support auto-close duration
                var show = $alert.show;
                if (options.duration) {
                    $alert.show = function () {
                        show();
                        $timeout(function () {
                            $alert.hide();
                        }, options.duration * 1000);
                    };
                }
                return $alert;
            }

            return AlertFactory;
        }];
    })

    .directive('jbAlert', ["$window", "$sce", "$jbAlert", function ($window, $sce, $jbAlert) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                angular.forEach(['title', 'content', 'type'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });
                if (attr.jbAlert)
                    scope.$watch(attr.jbAlert, function (newValue, oldValue) {
                        if (angular.isObject(newValue)) {
                            angular.extend(scope, newValue);
                        } else {
                            scope.content = newValue;
                        }
                    }, true);

                var alert = $jbAlert(options);

                element.on(attr.trigger || 'click', alert.toggle);
                scope.$on('$destroy', function () {
                    if (alert) alert.destroy();
                    options = null;
                    alert = null;
                });
            }
        };

    }]);
(function() {
    var module = angular.module('jb.ui');

    var btnDefaults = {
        activeClass: 'active',
        toggleEvent: 'click'
    };

    module.directive('jbCheckboxGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="checkbox"]');
                angular.forEach(children, function (child) {
                    var childEl = angular.element(child);
                    childEl.attr('jb-checkbox', '');
                    childEl.attr('ng-model', attr.ngModel + '.' + childEl.attr('value'));
                });
            }

        };

    });

    module.directive('jbCheckbox', ["$$rAF", function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support label > input[type="checkbox"]
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : true;
                if (constantValueRegExp.test(attr.trueValue)) {
                    trueValue = scope.$eval(attr.trueValue);
                }
                var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : false;
                if (constantValueRegExp.test(attr.falseValue)) {
                    falseValue = scope.$eval(attr.falseValue);
                }

                // Parse exotic values
                var hasExoticValues = typeof trueValue !== 'boolean' || typeof falseValue !== 'boolean';
                if (hasExoticValues) {
                    controller.$parsers.push(function (viewValue) {
                        // console.warn('$parser', element.attr('ng-model'), 'viewValue', viewValue);
                        return viewValue ? trueValue : falseValue;
                    });
                    // modelValue -> $formatters -> viewValue
                    controller.$formatters.push(function (modelValue) {
                        // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                        return angular.equals(modelValue, trueValue);
                    });
                    // Fix rendering for exotic values
                    scope.$watch(attr.ngModel, function (newValue, oldValue) {
                        controller.$render();
                    });
                }

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('ng-model'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, trueValue);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('ng-model'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        if (!isInput) {
                            controller.$setViewValue(!activeElement.hasClass('active'));
                        }
                        if (!hasExoticValues) {
                            controller.$render();
                        }
                    });
                });

            }

        };

    }]);

    module.directive('jbRadioGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="radio"]');
                angular.forEach(children, function (child) {
                    angular.element(child).attr('jb-radio', '');
                    angular.element(child).attr('ng-model', attr.ngModel);
                });
            }

        };

    });

    module.directive('jbRadio', ["$$rAF", function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support `label > input[type="radio"]` markup
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var value;
                attr.$observe('value', function (v) {
                    value = constantValueRegExp.test(v) ? scope.$eval(v) : v;
                    controller.$render();
                });

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('value'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, value);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('value'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        controller.$setViewValue(value);
                        controller.$render();
                    });
                });

            }

        };


    }]);

})();
angular.module('jb.ui')
    .directive('jbCheckList', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/checkList/checkList.tpl.html",
            link: function (scope, element, attrs) {

                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }

                setup(scope.jbVal);

                function setup(val) {
                    var other = [];
                    scope.selection = [];
                    val.split(';').forEach(function (item) {
                        if (scope.jbSrc.indexOf(item) > -1) {
                            scope.selection.push(item);
                        } else if (scope.jbOther && item) {
                            other.push(item);
                        }
                    });
                    scope.otherCk = (other.length>0);
                    scope.otherVal =other.join(';');
                }

                function updateJbVal() {
                    var val = scope.selection;
                    if (scope.jbOther && scope.otherVal) {
                        val.push(scope.otherVal);
                    }
                    scope.jbVal = val.join(';');
                }

                scope.toggleOther = function toggleOther() {
                    scope.otherCk = !scope.otherCk;
                    if (!scope.otherCk) {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };
                scope.toggleSelection = function toggleSelection(item) {
                    var idx = scope.selection.indexOf(item);
                    if (idx > -1) {
                        scope.selection.splice(idx, 1);
                    }
                    else {
                        scope.selection.push(item);
                    }
                    updateJbVal();
                };
                scope.$watch('otherVal', function (newval) {
                    scope.otherCk = !!newval;
                    updateJbVal();
                });
                scope.$watch('jbVal', setup);
            }
        };
    });

angular.module('jb.ui')

    .provider('$jbDate', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'datepicker',
            placement: 'bottom-left',
            template: 'jb/ui/datetime/datepicker.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: false,
            dateType: 'date',
            dateFormat: 'yyyy-MM-dd',
            modelDateFormat: null,
            dayFormat: 'dd',
            monthFormat: 'MMM',
            yearFormat: 'yyyy',
            monthTitleFormat: 'MMMM yyyy',
            yearTitleFormat: 'yyyy',
            strictFormat: false,
            autoclose: false,
            minDate: -Infinity,
            maxDate: +Infinity,
            startView: 0,
            minView: 0,
            startWeek: 0,
            daysOfWeekDisabled: '',
            iconLeft: 'glyphicon glyphicon-chevron-left',
            iconRight: 'glyphicon glyphicon-chevron-right'
        };

        this.$get = ["$window", "$document", "$rootScope", "$sce", "$jbDateFormatter", "datepickerViews", "$jbTip", "$timeout", function ($window, $document, $rootScope, $sce, $jbDateFormatter, datepickerViews, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;
            if (!defaults.lang) defaults.lang = $jbDateFormatter.getDefaultLocale();

            function DatepickerFactory(element, controller, config) {

                var $datepicker = $jbTip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $datepicker.$options;
                var scope = $datepicker.$scope;
                if (options.startView) options.startView -= options.minView;

                // View vars

                var pickerViews = datepickerViews($datepicker);
                $datepicker.$views = pickerViews.views;
                var viewDate = pickerViews.viewDate;
                scope.$mode = options.startView;
                scope.$iconLeft = options.iconLeft;
                scope.$iconRight = options.iconRight;
                var $picker = $datepicker.$views[scope.$mode];

                // Scope methods

                scope.$select = function (date) {
                    $datepicker.select(date);
                };
                scope.$selectPane = function (value) {
                    $datepicker.$selectPane(value);
                };
                scope.$toggleMode = function () {
                    $datepicker.setMode((scope.$mode + 1) % $datepicker.$views.length);
                };

                // Public methods

                $datepicker.update = function (date) {
                    // console.warn('$datepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $datepicker.$date = date;
                        $picker.update.call($picker, date);
                    }
                    // Build only if pristine
                    $datepicker.$build(true);
                };

                $datepicker.updateDisabledDates = function (dateRanges) {
                    options.disabledDateRanges = dateRanges;
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], $datepicker.$setDisabledEl);
                    }
                };

                $datepicker.select = function (date, keep) {
                    // console.warn('$datepicker.select', date, scope.$mode);
                    if (!angular.isDate(controller.$dateValue)) controller.$dateValue = new Date(date);

                    if (!scope.$mode || keep) {
                        controller.$setViewValue(angular.copy(date));
                        controller.$render();
                        if (options.autoclose && !keep) {
                            $timeout(function () {
                                $datepicker.hide(true);
                            });
                        }
                    } else {
                        angular.extend(viewDate, {
                            year: date.getFullYear(),
                            month: date.getMonth(),
                            date: date.getDate()
                        });
                        $datepicker.setMode(scope.$mode - 1);
                        $datepicker.$build();
                    }
                };

                $datepicker.setMode = function (mode) {
                    // console.warn('$datepicker.setMode', mode);
                    scope.$mode = mode;
                    $picker = $datepicker.$views[scope.$mode];
                    $datepicker.$build();
                };

                // Protected methods

                $datepicker.$build = function (pristine) {
                    // console.warn('$datepicker.$build() viewDate=%o', viewDate);
                    if (pristine === true && $picker.built) return;
                    if (pristine === false && !$picker.built) return;
                    $picker.build.call($picker);
                };

                $datepicker.$updateSelected = function () {
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], updateSelected);
                    }
                };

                $datepicker.$isSelected = function (date) {
                    return $picker.isSelected(date);
                };

                $datepicker.$setDisabledEl = function (el) {
                    el.disabled = $picker.isDisabled(el.date);
                };

                $datepicker.$selectPane = function (value) {
                    var steps = $picker.steps;
                    // set targetDate to first day of month to avoid problems with
                    // date values rollover. This assumes the viewDate does not
                    // depend on the day of the month
                    var targetDate = new Date(Date.UTC(viewDate.year + ((steps.year || 0) * value), viewDate.month + ((steps.month || 0) * value), 1));
                    angular.extend(viewDate, {
                        year: targetDate.getUTCFullYear(),
                        month: targetDate.getUTCMonth(),
                        date: targetDate.getUTCDate()
                    });
                    $datepicker.$build();
                };

                $datepicker.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== 'button') {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler('click');
                    }
                };

                $datepicker.$onKeyDown = function (evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    if (evt.keyCode === 13) {
                        if (!scope.$mode) {
                            return $datepicker.hide(true);
                        } else {
                            return scope.$apply(function () {
                                $datepicker.setMode(scope.$mode - 1);
                            });
                        }
                    }

                    // Navigate with keyboard
                    $picker.onKeyDown(evt);
                    parentScope.$digest();
                };

                // Private

                function updateSelected(el) {
                    el.selected = $datepicker.$isSelected(el.date);
                }

                function focusElement() {
                    element[0].focus();
                }

                // Overrides

                var _init = $datepicker.init;
                $datepicker.init = function () {
                    if (isNative && options.useNative) {
                        element.prop('type', 'date');
                        element.css('-webkit-appearance', 'textfield');
                        return;
                    } else if (isTouch) {
                        element.prop('type', 'text');
                        element.attr('readonly', 'true');
                        element.on('click', focusElement);
                    }
                    _init();
                };

                var _destroy = $datepicker.destroy;
                $datepicker.destroy = function () {
                    if (isNative && options.useNative) {
                        element.off('click', focusElement);
                    }
                    _destroy();
                };

                var _show = $datepicker.show;
                $datepicker.show = function () {
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        // if $datepicker is no longer showing, don't setup events
                        if (!$datepicker.$isShown) return;
                        $datepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $datepicker.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $datepicker.hide;
                $datepicker.hide = function (blur) {
                    if (!$datepicker.$isShown) return;
                    $datepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $datepicker.$onKeyDown);
                    }
                    _hide(blur);
                };

                return $datepicker;

            }

            DatepickerFactory.defaults = defaults;
            return DatepickerFactory;

        }];

    })

    .directive('jbDate', ["$window", "$parse", "$q", "$jbDateFormatter", "$jbDateParser", "$jbDate", function ($window, $parse, $q, $jbDateFormatter, $jbDateParser, $jbDate) {

        var defaults = $jbDate.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, controller: controller};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'dateType', 'dateFormat', 'modelDateFormat', 'dayFormat', 'strictFormat', 'startWeek', 'startDate', 'useNative', 'lang', 'startView', 'minView', 'iconLeft', 'iconRight', 'daysOfWeekDisabled', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!datepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(datepicker),?/i);
                    if (newValue === true) datepicker.show(); else datepicker.hide();
                });

                // Initialize datepicker
                var datepicker = $jbDate(element, controller, options);
                options = datepicker.$options;
                // Set expected iOS format
                if (isNative && options.useNative) options.dateFormat = 'yyyy-MM-dd';

                var lang = options.lang;

                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                var dateParser = $jbDateParser({format: options.dateFormat, lang: lang, strict: options.strictFormat});

                // Observe attributes for changes
                angular.forEach(['minDate', 'maxDate'], function (key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    if (angular.isDefined(attr[key])) attr.$observe(key, function (newValue) {
                        // console.warn('attr.$observe(%s)=%o', key, newValue);
                        datepicker.$options[key] = dateParser.getDateForAttribute(key, newValue);
                        // Build only if dirty
                        if (!isNaN(datepicker.$options[key])) datepicker.$build(false);
                        validateAgainstMinMaxDate(controller.$dateValue);
                    });
                });

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    datepicker.update(controller.$dateValue);
                }, true);

                // Normalize undefined/null/empty array,
                // so that we don't treat changing from undefined->null as a change.
                function normalizeDateRanges(ranges) {
                    if (!ranges || !ranges.length) return null;
                    return ranges;
                }

                if (angular.isDefined(attr.disabledDates)) {
                    scope.$watch(attr.disabledDates, function (disabledRanges, previousValue) {
                        disabledRanges = normalizeDateRanges(disabledRanges);
                        previousValue = normalizeDateRanges(previousValue);

                        if (disabledRanges) {
                            datepicker.updateDisabledDates(disabledRanges);
                        }
                    });
                }

                function validateAgainstMinMaxDate(parsedDate) {
                    if (!angular.isDate(parsedDate)) return;
                    var isMinValid = isNaN(datepicker.$options.minDate) || parsedDate.getTime() >= datepicker.$options.minDate;
                    var isMaxValid = isNaN(datepicker.$options.maxDate) || parsedDate.getTime() <= datepicker.$options.maxDate;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity('date', isValid);
                    controller.$setValidity('min', isMinValid);
                    controller.$setValidity('max', isMaxValid);
                    // Only update the model when we have a valid date
                    if (isValid) controller.$dateValue = parsedDate;
                }

                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function (viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        controller.$setValidity('date', true);
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        return null;
                    }
                    var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedDate || isNaN(parsedDate.getTime())) {
                        controller.$setValidity('date', false);
                        // return undefined, causes ngModelController to
                        // invalidate model value
                        return;
                    } else {
                        validateAgainstMinMaxDate(parsedDate);
                    }
                    if (options.dateType === 'string') {
                        return formatDate(parsedDate, options.modelDateFormat || options.dateFormat);
                    } else if (options.dateType === 'number') {
                        return controller.$dateValue.getTime();
                    } else if (options.dateType === 'unix') {
                        return controller.$dateValue.getTime() / 1000;
                    } else if (options.dateType === 'iso') {
                        return controller.$dateValue.toISOString();
                    } else {
                        return new Date(controller.$dateValue);
                    }
                });

                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function (modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.dateType === 'string') {
                        date = dateParser.parse(modelValue, null, options.modelDateFormat);
                    } else if (options.dateType === 'unix') {
                        date = new Date(modelValue * 1000);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) {
                    //   var today = new Date();
                    //   date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
                    // }
                    controller.$dateValue = date;
                    return getDateFormattedString();
                });

                // viewValue -> element
                controller.$render = function () {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getDateFormattedString());
                };

                function getDateFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.dateFormat);
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (datepicker) datepicker.destroy();
                    options = null;
                    datepicker = null;
                });

            }
        };

    }])

    .provider('datepickerViews', function () {

        var defaults = this.defaults = {
            dayFormat: 'dd',
            daySplit: 7
        };

        // Split array into smaller arrays
        function split(arr, size) {
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        }

        // Modulus operator
        function mod(n, m) {
            return ((n % m) + m) % m;
        }

        this.$get = ["$jbDateFormatter", "$jbDateParser", "$sce", function ($jbDateFormatter, $jbDateParser, $sce) {

            return function (picker) {

                var scope = picker.$scope;
                var options = picker.$options;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };
                var dateParser = $jbDateParser({format: options.dateFormat, lang: lang, strict: options.strictFormat});

                var weekDaysMin = $jbDateFormatter.weekdaysShort(lang);
                var weekDaysLabels = weekDaysMin.slice(options.startWeek).concat(weekDaysMin.slice(0, options.startWeek));
                var weekDaysLabelsHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + '</th>');

                var startDate = picker.$date || (options.startDate ? dateParser.getDateForAttribute('startDate', options.startDate) : new Date());
                var viewDate = {year: startDate.getFullYear(), month: startDate.getMonth(), date: startDate.getDate()};
                var timezoneOffset = startDate.getTimezoneOffset() * 6e4;

                var views = [{
                    format: options.dayFormat,
                    split: 7,
                    steps: {month: 1},
                    update: function (date, force) {
                        if (!this.built || force || date.getFullYear() !== viewDate.year || date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getDate() !== viewDate.date) {
                            viewDate.date = picker.$date.getDate();
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstDayOfMonth = new Date(viewDate.year, viewDate.month, 1), firstDayOfMonthOffset = firstDayOfMonth.getTimezoneOffset();
                        var firstDate = new Date(+firstDayOfMonth - mod(firstDayOfMonth.getDay() - options.startWeek, 7) * 864e5), firstDateOffset = firstDate.getTimezoneOffset();
                        var today = new Date().toDateString();
                        // Handle daylight time switch
                        if (firstDateOffset !== firstDayOfMonthOffset) firstDate = new Date(+firstDate + (firstDateOffset - firstDayOfMonthOffset) * 60e3);
                        var days = [], day;
                        for (var i = 0; i < 42; i++) { // < 7 * 6
                            day = dateParser.daylightSavingAdjust(new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i));
                            days.push({
                                date: day,
                                isToday: day.toDateString() === today,
                                label: formatDate(day, this.format),
                                selected: picker.$date && this.isSelected(day),
                                muted: day.getMonth() !== viewDate.month,
                                disabled: this.isDisabled(day)
                            });
                        }
                        scope.title = formatDate(firstDayOfMonth, options.monthTitleFormat);
                        scope.showLabels = true;
                        scope.labels = weekDaysLabelsHtml;
                        scope.rows = split(days, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth() && date.getDate() === picker.$date.getDate();
                    },
                    isDisabled: function (date) {
                        var time = date.getTime();

                        // Disabled because of min/max date.
                        if (time < options.minDate || time > options.maxDate) return true;

                        // Disabled due to being a disabled day of the week
                        if (options.daysOfWeekDisabled.indexOf(date.getDay()) !== -1) return true;

                        // Disabled because of disabled date range.
                        if (options.disabledDateRanges) {
                            for (var i = 0; i < options.disabledDateRanges.length; i++) {
                                if (time >= options.disabledDateRanges[i].start && time <= options.disabledDateRanges[i].end) {
                                    return true;
                                }
                            }
                        }

                        return false;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualTime = picker.$date.getTime();
                        var newDate;

                        if (evt.keyCode === 37) newDate = new Date(actualTime - 1 * 864e5);
                        else if (evt.keyCode === 38) newDate = new Date(actualTime - 7 * 864e5);
                        else if (evt.keyCode === 39) newDate = new Date(actualTime + 1 * 864e5);
                        else if (evt.keyCode === 40) newDate = new Date(actualTime + 7 * 864e5);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: 'month',
                    format: options.monthFormat,
                    split: 4,
                    steps: {year: 1},
                    update: function (date, force) {
                        if (!this.built || date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {month: picker.$date.getMonth(), date: picker.$date.getDate()});
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstMonth = new Date(viewDate.year, 0, 1);
                        var months = [], month;
                        for (var i = 0; i < 12; i++) {
                            month = new Date(viewDate.year, i, 1);
                            months.push({
                                date: month,
                                label: formatDate(month, this.format),
                                selected: picker.$isSelected(month),
                                disabled: this.isDisabled(month)
                            });
                        }
                        scope.title = formatDate(month, options.yearTitleFormat);
                        scope.showLabels = false;
                        scope.rows = split(months, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth();
                    },
                    isDisabled: function (date) {
                        var lastDate = +new Date(date.getFullYear(), date.getMonth() + 1, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualMonth = picker.$date.getMonth();
                        var newDate = new Date(picker.$date);

                        if (evt.keyCode === 37) newDate.setMonth(actualMonth - 1);
                        else if (evt.keyCode === 38) newDate.setMonth(actualMonth - 4);
                        else if (evt.keyCode === 39) newDate.setMonth(actualMonth + 1);
                        else if (evt.keyCode === 40) newDate.setMonth(actualMonth + 4);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: 'year',
                    format: options.yearFormat,
                    split: 4,
                    steps: {year: 12},
                    update: function (date, force) {
                        if (!this.built || force || parseInt(date.getFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10)) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$updateSelected();
                        }
                    },
                    build: function () {
                        var firstYear = viewDate.year - viewDate.year % (this.split * 3);
                        var years = [], year;
                        for (var i = 0; i < 12; i++) {
                            year = new Date(firstYear + i, 0, 1);
                            years.push({
                                date: year,
                                label: formatDate(year, this.format),
                                selected: picker.$isSelected(year),
                                disabled: this.isDisabled(year)
                            });
                        }
                        scope.title = years[0].label + '-' + years[years.length - 1].label;
                        scope.showLabels = false;
                        scope.rows = split(years, this.split);
                        this.built = true;
                    },
                    isSelected: function (date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear();
                    },
                    isDisabled: function (date) {
                        var lastDate = +new Date(date.getFullYear() + 1, 0, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function (evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualYear = picker.$date.getFullYear(),
                            newDate = new Date(picker.$date);

                        if (evt.keyCode === 37) newDate.setYear(actualYear - 1);
                        else if (evt.keyCode === 38) newDate.setYear(actualYear - 4);
                        else if (evt.keyCode === 39) newDate.setYear(actualYear + 1);
                        else if (evt.keyCode === 40) newDate.setYear(actualYear + 4);

                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }];

                return {
                    views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
                    viewDate: viewDate
                };

            };

        }];

    });
angular.module('jb.ui')

    .provider('$jbTime', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'timepicker',
            placement: 'bottom-left',
            template: 'jb/ui/datetime/timepicker.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: true,
            timeType: 'date',
            timeFormat: 'shortTime',
            modelTimeFormat: null,
            autoclose: false,
            minTime: -Infinity,
            maxTime: +Infinity,
            length: 5,
            hourStep: 1,
            minuteStep: 5,
            iconUp: 'glyphicon glyphicon-chevron-up',
            iconDown: 'glyphicon glyphicon-chevron-down',
            arrowBehavior: 'pager'
        };

        this.$get = ["$window", "$document", "$rootScope", "$sce", "$jbDateFormatter", "$jbTip", "$timeout", function ($window, $document, $rootScope, $sce, $jbDateFormatter, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;
            if (!defaults.lang) defaults.lang = $jbDateFormatter.getDefaultLocale();

            function timepickerFactory(element, controller, config) {

                var $timepicker = $jbTip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $timepicker.$options;
                var scope = $timepicker.$scope;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                // View vars

                var selectedIndex = 0;
                var startDate = controller.$dateValue || new Date();
                var viewDate = {
                    hour: startDate.getHours(),
                    meridian: startDate.getHours() < 12,
                    minute: startDate.getMinutes(),
                    second: startDate.getSeconds(),
                    millisecond: startDate.getMilliseconds()
                };

                var format = $jbDateFormatter.getDatetimeFormat(options.timeFormat, lang);

                var hoursFormat = $jbDateFormatter.hoursFormat(format),
                    timeSeparator = $jbDateFormatter.timeSeparator(format),
                    minutesFormat = $jbDateFormatter.minutesFormat(format),
                    showAM = $jbDateFormatter.showAM(format);

                scope.$iconUp = options.iconUp;
                scope.$iconDown = options.iconDown;

                // Scope methods

                scope.$select = function (date, index) {
                    $timepicker.select(date, index);
                };
                scope.$moveIndex = function (value, index) {
                    $timepicker.$moveIndex(value, index);
                };
                scope.$switchMeridian = function (date) {
                    $timepicker.switchMeridian(date);
                };

                // Public methods

                $timepicker.update = function (date) {
                    // console.warn('$timepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $timepicker.$date = date;
                        angular.extend(viewDate, {
                            hour: date.getHours(),
                            minute: date.getMinutes(),
                            second: date.getSeconds(),
                            millisecond: date.getMilliseconds()
                        });
                        $timepicker.$build();
                    } else if (!$timepicker.$isBuilt) {
                        $timepicker.$build();
                    }
                };

                $timepicker.select = function (date, index, keep) {
                    // console.warn('$timepicker.select', date, scope.$mode);
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) controller.$dateValue = new Date(1970, 0, 1);
                    if (!angular.isDate(date)) date = new Date(date);
                    if (index === 0) controller.$dateValue.setHours(date.getHours());
                    else if (index === 1) controller.$dateValue.setMinutes(date.getMinutes());
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                    if (options.autoclose && !keep) {
                        $timeout(function () {
                            $timepicker.hide(true);
                        });
                    }
                };

                $timepicker.switchMeridian = function (date) {
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) {
                        return;
                    }
                    var hours = (date || controller.$dateValue).getHours();
                    controller.$dateValue.setHours(hours < 12 ? hours + 12 : hours - 12);
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                };

                // Protected methods

                $timepicker.$build = function () {
                    // console.warn('$timepicker.$build() viewDate=%o', viewDate);
                    var i, midIndex = scope.midIndex = parseInt(options.length / 2, 10);
                    var hours = [], hour;
                    for (i = 0; i < options.length; i++) {
                        hour = new Date(1970, 0, 1, viewDate.hour - (midIndex - i) * options.hourStep);
                        hours.push({
                            date: hour,
                            label: formatDate(hour, hoursFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(hour, 0),
                            disabled: $timepicker.$isDisabled(hour, 0)
                        });
                    }
                    var minutes = [], minute;
                    for (i = 0; i < options.length; i++) {
                        minute = new Date(1970, 0, 1, 0, viewDate.minute - (midIndex - i) * options.minuteStep);
                        minutes.push({
                            date: minute,
                            label: formatDate(minute, minutesFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(minute, 1),
                            disabled: $timepicker.$isDisabled(minute, 1)
                        });
                    }

                    var rows = [];
                    for (i = 0; i < options.length; i++) {
                        rows.push([hours[i], minutes[i]]);
                    }
                    scope.rows = rows;
                    scope.showAM = showAM;
                    scope.isAM = ($timepicker.$date || hours[midIndex].date).getHours() < 12;
                    scope.timeSeparator = timeSeparator;
                    $timepicker.$isBuilt = true;
                };

                $timepicker.$isSelected = function (date, index) {
                    if (!$timepicker.$date) return false;
                    else if (index === 0) {
                        return date.getHours() === $timepicker.$date.getHours();
                    } else if (index === 1) {
                        return date.getMinutes() === $timepicker.$date.getMinutes();
                    }
                };

                $timepicker.$isDisabled = function (date, index) {
                    var selectedTime;
                    if (index === 0) {
                        selectedTime = date.getTime() + viewDate.minute * 6e4;
                    } else if (index === 1) {
                        selectedTime = date.getTime() + viewDate.hour * 36e5;
                    }
                    return selectedTime < options.minTime * 1 || selectedTime > options.maxTime * 1;
                };

                scope.$arrowAction = function (value, index) {
                    if (options.arrowBehavior === 'picker') {
                        $timepicker.$setTimeByStep(value, index);
                    } else {
                        $timepicker.$moveIndex(value, index);
                    }
                };

                $timepicker.$setTimeByStep = function (value, index) {
                    var newDate = new Date($timepicker.$date);
                    var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
                    var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
                    if (index === 0) {
                        newDate.setHours(hours - (parseInt(options.hourStep, 10) * value));
                    }
                    else {
                        newDate.setMinutes(minutes - (parseInt(options.minuteStep, 10) * value));
                    }
                    $timepicker.select(newDate, index, true);
                };

                $timepicker.$moveIndex = function (value, index) {
                    var targetDate;
                    if (index === 0) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour + (value * options.length), viewDate.minute);
                        angular.extend(viewDate, {hour: targetDate.getHours()});
                    } else if (index === 1) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute + (value * options.length * options.minuteStep));
                        angular.extend(viewDate, {minute: targetDate.getMinutes()});
                    }
                    $timepicker.$build();
                };

                $timepicker.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    if (evt.target.nodeName.toLowerCase() !== 'input') evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== 'button') {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler('click');
                    }
                };

                $timepicker.$onKeyDown = function (evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // Close on enter
                    if (evt.keyCode === 13) return $timepicker.hide(true);

                    // Navigate with keyboard
                    var newDate = new Date($timepicker.$date);
                    var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
                    var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
                    var lateralMove = /(37|39)/.test(evt.keyCode);
                    var count = 2 + showAM * 1;

                    // Navigate indexes (left, right)
                    if (lateralMove) {
                        if (evt.keyCode === 37) selectedIndex = selectedIndex < 1 ? count - 1 : selectedIndex - 1;
                        else if (evt.keyCode === 39) selectedIndex = selectedIndex < count - 1 ? selectedIndex + 1 : 0;
                    }

                    // Update values (up, down)
                    var selectRange = [0, hoursLength];
                    if (selectedIndex === 0) {
                        if (evt.keyCode === 38) newDate.setHours(hours - parseInt(options.hourStep, 10));
                        else if (evt.keyCode === 40) newDate.setHours(hours + parseInt(options.hourStep, 10));
                        // re-calculate hours length because we have changed hours value
                        hoursLength = formatDate(newDate, hoursFormat).length;
                        selectRange = [0, hoursLength];
                    } else if (selectedIndex === 1) {
                        if (evt.keyCode === 38) newDate.setMinutes(minutes - parseInt(options.minuteStep, 10));
                        else if (evt.keyCode === 40) newDate.setMinutes(minutes + parseInt(options.minuteStep, 10));
                        // re-calculate minutes length because we have changes minutes value
                        minutesLength = formatDate(newDate, minutesFormat).length;
                        selectRange = [hoursLength + 1, hoursLength + 1 + minutesLength];
                    } else if (selectedIndex === 2) {
                        if (!lateralMove) $timepicker.switchMeridian();
                        selectRange = [hoursLength + 1 + minutesLength + 1, hoursLength + 1 + minutesLength + 3];
                    }
                    $timepicker.select(newDate, selectedIndex, true);
                    createSelection(selectRange[0], selectRange[1]);
                    parentScope.$digest();
                };

                // Private

                function createSelection(start, end) {
                    if (element[0].createTextRange) {
                        var selRange = element[0].createTextRange();
                        selRange.collapse(true);
                        selRange.moveStart('character', start);
                        selRange.moveEnd('character', end);
                        selRange.select();
                    } else if (element[0].setSelectionRange) {
                        element[0].setSelectionRange(start, end);
                    } else if (angular.isUndefined(element[0].selectionStart)) {
                        element[0].selectionStart = start;
                        element[0].selectionEnd = end;
                    }
                }

                function focusElement() {
                    element[0].focus();
                }

                // Overrides

                var _init = $timepicker.init;
                $timepicker.init = function () {
                    if (isNative && options.useNative) {
                        element.prop('type', 'time');
                        element.css('-webkit-appearance', 'textfield');
                        return;
                    } else if (isTouch) {
                        element.prop('type', 'text');
                        element.attr('readonly', 'true');
                        element.on('click', focusElement);
                    }
                    _init();
                };

                var _destroy = $timepicker.destroy;
                $timepicker.destroy = function () {
                    if (isNative && options.useNative) {
                        element.off('click', focusElement);
                    }
                    _destroy();
                };

                var _show = $timepicker.show;
                $timepicker.show = function () {
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        $timepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $timepicker.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $timepicker.hide;
                $timepicker.hide = function (blur) {
                    if (!$timepicker.$isShown) return;
                    $timepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $timepicker.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $timepicker.$onKeyDown);
                    }
                    _hide(blur);
                };

                return $timepicker;

            }

            timepickerFactory.defaults = defaults;
            return timepickerFactory;

        }];

    })


    .directive('jbTime', ["$window", "$parse", "$q", "$jbDateFormatter", "$jbDateParser", "$jbTime", function ($window, $parse, $q, $jbDateFormatter, $jbDateParser, $jbTime) {

        var defaults = $jbTime.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, controller: controller};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'autoclose', 'timeType', 'timeFormat', 'modelTimeFormat', 'useNative', 'hourStep', 'minuteStep', 'length', 'arrowBehavior', 'iconUp', 'iconDown', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!timepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(timepicker),?/i);
                    if (newValue === true) timepicker.show(); else timepicker.hide();
                });

                // Initialize timepicker
                if (isNative && (options.useNative || defaults.useNative)) options.timeFormat = 'HH:mm';
                var timepicker = $jbTime(element, controller, options);
                options = timepicker.$options;

                var lang = options.lang;
                var formatDate = function (date, format) {
                    return $jbDateFormatter.formatDate(date, format, lang);
                };

                // Initialize parser
                var dateParser = $jbDateParser({format: options.timeFormat, lang: lang});

                // Observe attributes for changes
                angular.forEach(['minTime', 'maxTime'], function (key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    if (angular.isDefined(attr[key])) attr.$observe(key, function (newValue) {
                        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
                        if (!isNaN(timepicker.$options[key])) timepicker.$build();
                        validateAgainstMinMaxTime(controller.$dateValue);
                    });
                });

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.ngModel, newValue, oldValue, controller.$dateValue);
                    timepicker.update(controller.$dateValue);
                }, true);

                function validateAgainstMinMaxTime(parsedTime) {
                    if (!angular.isDate(parsedTime)) return;
                    var isMinValid = isNaN(options.minTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) >= options.minTime;
                    var isMaxValid = isNaN(options.maxTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) <= options.maxTime;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity('date', isValid);
                    controller.$setValidity('min', isMinValid);
                    controller.$setValidity('max', isMaxValid);
                    // Only update the model when we have a valid date
                    if (!isValid) {
                        return;
                    }
                    controller.$dateValue = parsedTime;
                }

                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function (viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        controller.$setValidity('date', true);
                        return null;
                    }
                    var parsedTime = angular.isDate(viewValue) ? viewValue : dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedTime || isNaN(parsedTime.getTime())) {
                        controller.$setValidity('date', false);
                        // return undefined, causes ngModelController to
                        // invalidate model value
                        return;
                    } else {
                        validateAgainstMinMaxTime(parsedTime);
                    }
                    if (options.timeType === 'string') {
                        return formatDate(parsedTime, options.modelTimeFormat || options.timeFormat);
                    } else if (options.timeType === 'number') {
                        return controller.$dateValue.getTime();
                    } else if (options.timeType === 'unix') {
                        return controller.$dateValue.getTime() / 1000;
                    } else if (options.timeType === 'iso') {
                        return controller.$dateValue.toISOString();
                    } else {
                        return new Date(controller.$dateValue);
                    }
                });

                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function (modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.timeType === 'string') {
                        date = dateParser.parse(modelValue, null, options.modelTimeFormat);
                    } else if (options.timeType === 'unix') {
                        date = new Date(modelValue * 1000);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) date = new Date(new Date().setMinutes(0) + 36e5);
                    controller.$dateValue = date;
                    return getTimeFormattedString();
                });

                // viewValue -> element
                controller.$render = function () {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getTimeFormattedString());
                };

                function getTimeFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? '' : formatDate(controller.$dateValue, options.timeFormat);
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (timepicker) timepicker.destroy();
                    options = null;
                    timepicker = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('draggable', function () {
        return {
            scope: {
                dragType: '=',
                dragVal: '='
            },
            link: function (scope, element) {
                // this gives us the native JS object
                var el = element[0];
                el.draggable = true;
                el.addEventListener(
                    'dragstart',
                    function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('Type', scope.dragType);
                        e.dataTransfer.setData('Val', scope.dragVal);
                        this.classList.add('drag');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragend',
                    function (e) {
                        this.classList.remove('drag');
                        return false;
                    },
                    false
                );
            }
        };
    })
    .directive('droppable', function () {
        return {
            scope: {
                drop: '&',
                dropVal: '='
            },
            link: function (scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function (e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function (e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function (e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'drop',
                    function (e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        this.classList.remove('over');
                        var dragVal = e.dataTransfer.getData('Val');
                        // this.appendChild(item);
                        // call the passed drop function
                        scope.$apply(function (scope) {
                            var fn = scope.drop();
                            if ('undefined' !== typeof fn) {
                                fn(dragVal, scope.dropVal);
                            }
                        });
                        return false;
                    },
                    false
                );
            }
        };
    });
angular.module('jb.ui')
    .provider('$jbDropdown', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'dropdown',
            placement: 'bottom-left',
            template: 'jb/ui/dropdown/dropdown.tpl.html',
            trigger: 'click',
            container: false,
            keyboard: true,
            html: true,
            delay: 0
        };

        this.$get = ["$window", "$rootScope", "$jbTip", "$timeout", function ($window, $rootScope, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var matchesSelector = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;

            function DropdownFactory(element, config) {

                var $dropdown = {};

                // Common vars
                var options = angular.extend({}, defaults, config);
                var scope = $dropdown.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                $dropdown = $jbTip(element, options);
                var parentEl = element.parent();

                // Protected methods

                $dropdown.$onKeyDown = function (evt) {
                    if (!/(38|40)/.test(evt.keyCode)) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // Retrieve focused index
                    var items = angular.element($dropdown.$element[0].querySelectorAll('li:not(.divider) a'));
                    if (!items.length) return;
                    var index;
                    angular.forEach(items, function (el, i) {
                        if (matchesSelector && matchesSelector.call(el, ':focus')) index = i;
                    });

                    // Navigate with keyboard
                    if (evt.keyCode === 38 && index > 0) index--;
                    else if (evt.keyCode === 40 && index < items.length - 1) index++;
                    else if (angular.isUndefined(index)) index = 0;
                    items.eq(index)[0].focus();

                };

                // Overrides

                var show = $dropdown.show;
                $dropdown.show = function () {
                    show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        if (options.keyboard) $dropdown.$element.on('keydown', $dropdown.$onKeyDown);
                        bodyEl.on('click', onBodyClick);
                    }, 0, false);
                    if (parentEl.hasClass('dropdown')) parentEl.addClass('open');
                };

                var hide = $dropdown.hide;
                $dropdown.hide = function () {
                    if (!$dropdown.$isShown) return;
                    if (options.keyboard) $dropdown.$element.off('keydown', $dropdown.$onKeyDown);
                    bodyEl.off('click', onBodyClick);
                    if (parentEl.hasClass('dropdown')) parentEl.removeClass('open');
                    hide();
                };

                var destroy = $dropdown.destroy;
                $dropdown.destroy = function () {
                    bodyEl.off('click', onBodyClick);
                    destroy();
                };

                // Private functions

                function onBodyClick(evt) {
                    if (evt.target === element[0]) return;
                    return evt.target !== element[0] && $dropdown.hide();
                }

                return $dropdown;

            }

            return DropdownFactory;

        }];

    })

    .directive('jbDropdown', ["$window", "$sce", "$jbDropdown", function ($window, $sce, $jbDropdown) {

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as an object
                if (attr.jbDropdown) scope.$watch(attr.jbDropdown, function (newValue, oldValue) {
                    scope.content = newValue;
                }, true);

                // Visibility binding support
                if (attr.bsShow) scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!dropdown || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(dropdown),?/i);
                    if (newValue === true) dropdown.show(); else dropdown.hide();
                });

                // Initialize dropdown
                var dropdown = $jbDropdown(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (dropdown) dropdown.destroy();
                    options = null;
                    dropdown = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('jbDropdownToggle', ['$document', '$location', function ($document, $location) {
        var openElement = null,
            closeMenu = angular.noop;
        return {
            restrict: 'CA',
            link: function (scope, element, attrs) {
                scope.$watch('$location.path', function () {
                    closeMenu();
                });
                element.parent().bind('click', function () {
                    closeMenu();
                });
                element.bind('click', function (event) {

                    var elementWasOpen = (element === openElement);

                    event.preventDefault();
                    event.stopPropagation();

                    if (!!openElement) {
                        closeMenu();
                    }

                    if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
                        element.parent().addClass('open');
                        openElement = element;
                        closeMenu = function (event) {
                            if (event) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            $document.unbind('click', closeMenu);
                            element.parent().removeClass('open');
                            closeMenu = angular.noop;
                            openElement = null;
                        };
                        $document.bind('click', closeMenu);
                    }
                });
            }
        };
    }]);

(function() {
    var module = angular.module('jb.ui');

    module.directive('jbFormGroup', function(){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'jb/ui/form/fg.tpl.html',
            scope: {
                lb: '@jbLb',
                ip: '=jbIp'
            }
        };
    });

    module.directive('jbFormGroupH', function(){
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            templateUrl: function(element, attrs){
                return attrs.jbCount?  'jb/ui/form/fgh2.tpl.html':  'jb/ui/form/fgh.tpl.html';
            },
            scope: {
                lb: '=jbLb',
                w:'=jbWidth',
                count:'=?jbCount'
            },
            link: function (scope, element, attrs) {
                scope.w0='col-sm-'+scope.w[0];
                scope.w1='col-sm-'+scope.w[1];
                if(scope.count){
                    scope.w2='col-sm-'+scope.w[2];
                    scope.w3='col-sm-'+scope.w[3];
                }
            }
        };
    });

})();
angular.module('jb.ui')
    .directive('jbInputGroupDropdownBtn', function () {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '='},
            replace: true,
            templateUrl: "jb/ui/inputGroupDropdownBtn/inputGroupDropdownBtn.tpl.html",
            link: function (scope, element, attrs) {
                if (!Array.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.update = function updateJbVal(val) {
                    scope.jbVal = val;
                };
            }
        };
    });

angular.module('jb.ui')
    .provider('$jbModal', function () {
        var defaults = this.defaults = {
            //animation: 'am-fade',
            //backdropAnimation: 'am-fade',
            type: 'modal',
            size: null,
            placement: 'center',
            template: 'jb/ui/modal/modal.tpl.html',
            contentTemplate: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };
        this.$get = ["$window", "$rootScope", "$sce", "$compile", "$templateCache", "$animate", function ($window, $rootScope, $sce, $compile, $templateCache, $animate) {
            var trim = String.prototype.trim;
            var bodyElement = angular.element($window.document.body);
            var htmlReplaceRegExp = /ng-bind="/ig;

            function ModalFactory(config) {
                var $modal = {};
                var modalElement, backdropElement;
                var options = $modal.$options = angular.extend({}, defaults, config);
                var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                angular.forEach(['title', 'content'], function (key) {
                    if (options[key]) scope[key] = $sce.trustAsHtml(options[key]);
                });

                // Provide scope helpers
                scope.$hide = function () {
                    scope.$$postDigest(function () {
                        $modal.hide();
                    });
                };
                scope.$show = function () {
                    scope.$$postDigest(function () {
                        $modal.show();
                    });
                };
                scope.$toggle = function () {
                    scope.$$postDigest(function () {
                        $modal.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $modal.$isShown = scope.$isShown = false;
                $modal.$size = scope.$size=options.size;
                $modal.$placement = scope.$placement = options.placement;


                $modal.init = function () {
                    if (options.show) {
                        scope.$$postDigest(function () {
                            $modal.show();
                        });
                    }
                };
                $modal.destroy = function () {
                    if (modalElement) {
                        modalElement.remove();
                        modalElement = null;
                    }
                    scope.$destroy();
                };
                $modal.show = function () {
                    if ($modal.$isShown) return;

                    var parent, after;
                    parent = bodyElement;
                    after = parent[0].lastChild ? angular.element(parent[0].lastChild) : null;

                    modalElement = $modal.$element = modalLinker(scope, function (clonedElement, scope) {
                    });
                    modalElement.css({display: 'block'});
                    $animate.enter(modalElement, parent, after);

                    $modal.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    bodyElement.addClass('modal-open');

                    var el = modalElement[0];
                    el.focus();

                    if (options.backdrop) {
                        backdropElement = angular.element(modalElement.children()[0]);
                        modalElement.on('click', hideOnBackdropClick);
                        backdropElement.on('click', hideOnBackdropClick);
                        backdropElement.on('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.on('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.hide = function () {
                    if (!$modal.$isShown) return;

                    var promise = $animate.leave(modalElement, leaveAnimateCallback);
                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    if (promise && promise.then) promise.then(leaveAnimateCallback);

                    $modal.$isShown = scope.$isShown = false;
                    safeDigest(scope);

                    // Unbind events
                    if (options.backdrop) {
                        modalElement.off('click', hideOnBackdropClick);
                        backdropElement.off('click', hideOnBackdropClick);
                        backdropElement.off('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.off('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.toggle = function () {
                    if ($modal.$isShown) {
                        $modal.hide();
                    } else {
                        $modal.show();
                    }
                };

                $modal.focus = function () {
                    modalElement[0].focus();
                };

                $modal.$onKeyUp = function (evt) {
                    if (evt.which === 27 && $modal.$isShown) {
                        $modal.hide();
                        evt.stopPropagation();
                    }
                };


                var template = $templateCache.get(options.template);
                if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
                template = trim.apply(template);


                var modalLinker = $compile(template);
                $modal.init();

                function hideOnBackdropClick(evt) {
                    if (evt.target !== evt.currentTarget) return;
                   if(  options.backdrop === 'static' ) $modal.focus() ;
                    else $modal.hide();
                }

                function leaveAnimateCallback() {
                    scope.$emit(options.type + '.hide', $modal);
                    bodyElement.removeClass('modal-open');
                    if (options.animation) {
                        bodyElement.removeClass(options.type + '-with-' + options.animation);
                    }
                }

                return $modal;
            }

            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }

            function safeDigest(scope) {
               var tmp= scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
            }

            function preventEventDefault(evt) {
                evt.preventDefault();
            }

            return ModalFactory;
        }];

    })
    .directive('jbModal', ["$window", "$sce", "$jbModal", function ($window, $sce, $jbModal) {
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'size', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });

                // Support scope as an object
                if (attr.jbModal) scope.$watch(attr.jbModal, function (newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.content = newValue;
                    }
                }, true);

                var modal = $jbModal(options);

                element.on(attr.trigger || 'click', modal.toggle);

                scope.$on('$destroy', function () {
                    if (modal) modal.destroy();
                    options = null;
                    modal = null;
                });
            }
        };
    }]);


angular.module('jb.ui')
    .controller('PaginationController', ['$scope', '$attrs', '$parse', '$interpolate', function ($scope, $attrs, $parse, $interpolate) {
        var self = this,
            setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

        this.init = function (defaultItemsPerPage) {
            if ($attrs.itemsPerPage) {
                $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
                    self.itemsPerPage = parseInt(value, 10);
                    $scope.totalPages = self.calculateTotalPages();
                });
            } else {
                this.itemsPerPage = defaultItemsPerPage;
            }
        };

        this.noPrevious = function () {
            return this.page === 1;
        };
        this.noNext = function () {
            return this.page === $scope.totalPages;
        };

        this.isActive = function (page) {
            return this.page === page;
        };

        this.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };

        this.getAttributeValue = function (attribute, defaultValue, interpolate) {
            return angular.isDefined(attribute) ? (interpolate ? $interpolate(attribute)($scope.$parent) : $scope.$parent.$eval(attribute)) : defaultValue;
        };

        this.render = function () {
            this.page = parseInt($scope.page, 10) || 1;
            if (this.page > 0 && this.page <= $scope.totalPages) {
                $scope.pages = this.getPages(this.page, $scope.totalPages);
            }
        };

        $scope.selectPage = function (page) {
            if (!self.isActive(page) && page > 0 && page <= $scope.totalPages) {
                $scope.page = page;
                $scope.onSelectPage({ page: page });
            }
        };

        $scope.$watch('page', function () {
            self.render();
        });

        $scope.$watch('totalItems', function () {
            $scope.totalPages = self.calculateTotalPages();
        });

        $scope.$watch('totalPages', function (value) {
            setNumPages($scope.$parent, value); // Readonly variable

            if (self.page > value) {
                $scope.selectPage(value);
            } else {
                self.render();
            }
        });
    }])

    .constant('paginationConfig', {
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        rotate: true
    })

    .directive('jbPagination', ['$parse', 'paginationConfig', function ($parse, config) {
        return {
            restrict: 'EA',
            scope: {
                page: '=',
                totalItems: '=',
                onSelectPage: ' &'
            },
            controller: 'PaginationController',
            templateUrl: 'jb/ui/pager/pagination.tpl.html',
            replace: true,
            link: function (scope, element, attrs, paginationCtrl) {

                // Setup configuration parameters
                var maxSize,
                    boundaryLinks = paginationCtrl.getAttributeValue(attrs.boundaryLinks, config.boundaryLinks),
                    directionLinks = paginationCtrl.getAttributeValue(attrs.directionLinks, config.directionLinks),
                    firstText = paginationCtrl.getAttributeValue(attrs.firstText, config.firstText, true),
                    previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                    nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                    lastText = paginationCtrl.getAttributeValue(attrs.lastText, config.lastText, true),
                    rotate = paginationCtrl.getAttributeValue(attrs.rotate, config.rotate);

                paginationCtrl.init(config.itemsPerPage);

                if (attrs.maxSize) {
                    scope.$parent.$watch($parse(attrs.maxSize), function (value) {
                        maxSize = parseInt(value, 10);
                        paginationCtrl.render();
                    });
                }

                // Create page object used in template
                function makePage(number, text, isActive, isDisabled) {
                    return {
                        number: number,
                        text: text,
                        active: isActive,
                        disabled: isDisabled
                    };
                }

                paginationCtrl.getPages = function (currentPage, totalPages) {
                    var pages = [];

                    // Default page limits
                    var startPage = 1, endPage = totalPages;
                    var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

                    // recompute if maxSize
                    if (isMaxSized) {
                        if (rotate) {
                            // Current page is displayed in the middle of the visible ones
                            startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
                            endPage = startPage + maxSize - 1;

                            // Adjust if limit is exceeded
                            if (endPage > totalPages) {
                                endPage = totalPages;
                                startPage = endPage - maxSize + 1;
                            }
                        } else {
                            // Visible pages are paginated with maxSize
                            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

                            // Adjust last page if limit is exceeded
                            endPage = Math.min(startPage + maxSize - 1, totalPages);
                        }
                    }

                    // Add page number links
                    for (var number = startPage; number <= endPage; number++) {
                        var page = makePage(number, number, paginationCtrl.isActive(number), false);
                        pages.push(page);
                    }

                    // Add links to move between page sets
                    if (isMaxSized && !rotate) {
                        if (startPage > 1) {
                            var previousPageSet = makePage(startPage - 1, '...', false, false);
                            pages.unshift(previousPageSet);
                        }

                        if (endPage < totalPages) {
                            var nextPageSet = makePage(endPage + 1, '...', false, false);
                            pages.push(nextPageSet);
                        }
                    }

                    // Add previous & next links
                    if (directionLinks) {
                        var previousPage = makePage(currentPage - 1, previousText, false, paginationCtrl.noPrevious());
                        pages.unshift(previousPage);

                        var nextPage = makePage(currentPage + 1, nextText, false, paginationCtrl.noNext());
                        pages.push(nextPage);
                    }

                    // Add first & last links
                    if (boundaryLinks) {
                        var firstPage = makePage(1, firstText, false, paginationCtrl.noPrevious());
                        pages.unshift(firstPage);

                        var lastPage = makePage(totalPages, lastText, false, paginationCtrl.noNext());
                        pages.push(lastPage);
                    }

                    return pages;
                };
            }
        };
    }])

    .constant('pagerConfig', {
        itemsPerPage: 10,
        previousText: '« Previous',
        nextText: 'Next »',
        align: true
    })

    .directive('jbPager', ['pagerConfig', function (config) {
        return {
            restrict: 'EA',
            scope: {
                page: '=',
                totalItems: '=',
                onSelectPage: ' &'
            },
            controller: 'PaginationController',
            templateUrl: 'jb/ui/pager/pager.tpl.html',
            replace: true,
            link: function (scope, element, attrs, paginationCtrl) {

                // Setup configuration parameters
                var previousText = paginationCtrl.getAttributeValue(attrs.previousText, config.previousText, true),
                    nextText = paginationCtrl.getAttributeValue(attrs.nextText, config.nextText, true),
                    align = paginationCtrl.getAttributeValue(attrs.align, config.align);

                paginationCtrl.init(config.itemsPerPage);

                // Create page object used in template
                function makePage(number, text, isDisabled, isPrevious, isNext) {
                    return {
                        number: number,
                        text: text,
                        disabled: isDisabled,
                        previous: ( align && isPrevious ),
                        next: ( align && isNext )
                    };
                }

                paginationCtrl.getPages = function (currentPage) {
                    return [
                        makePage(currentPage - 1, previousText, paginationCtrl.noPrevious(), true, false),
                        makePage(currentPage + 1, nextText, paginationCtrl.noNext(), false, true)
                    ];
                };
            }
        };
    }]);

angular.module('jb.ui')
    .provider('$jbPop', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            customClass: '',
            container: false,
            target: false,
            placement: 'right',
            template: 'jb/ui/popover/popover.tpl.html',
            contentTemplate: false,
            trigger: 'click',
            keyboard: true,
            html: true,
            title: '',
            content: '',
            delay: 0,
            autoClose: false
        };

        this.$get = ["$jbTip", function ($jbTip) {

            function PopoverFactory(element, config) {

                // Common vars
                var options = angular.extend({}, defaults, config);

                var $popover = $jbTip(element, options);

                // Support scope as string options [/*title, */content]
                if (options.content) {
                    $popover.$scope.content = options.content;
                }

                return $popover;

            }

            return PopoverFactory;

        }];

    })

    .directive('jbPop', ["$window", "$sce", "$jbPop", function ($window, $sce, $jbPop) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                            if (angular.isDefined(oldValue)) {
                                requestAnimationFrame(function () {
                                    if (popover) popover.$applyPlacement();
                                });
                            }
                        });
                    }
                });

                // Support scope as an object
               if( attr.jbPop ) {
                   scope.$watch(attr.jbPop, function (newValue, oldValue) {

                       if (angular.isObject(newValue)) {
                           angular.extend(scope, newValue);
                       } else {
                           scope.content = newValue;
                       }
                       if (angular.isDefined(oldValue)) {
                           requestAnimationFrame(function () {
                               if (popover) popover.$applyPlacement();
                           });
                       }
                   }, true);
               }
                // Visibility binding support
               if( attr.bsShow) {
                   scope.$watch(attr.bsShow, function (newValue, oldValue) {
                       if (!popover || !angular.isDefined(newValue)) return;
                       if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
                       if( newValue === true ) popover.show() ;
                       else popover.hide();
                   });
               }
                // Initialize popover
                var popover = $jbPop(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (popover) popover.destroy();
                    options = null;
                    popover = null;
                });

            }
        };

    }]);
angular.module('jb.ui')
    .directive('jbRadioList', ["$parse", function ($parse) {
        return {
            restrict: 'ECA',
            scope: {jbSrc: '=', jbVal: '=', jbOther: '='},
            templateUrl: "jb/ui/radioList/radioList.tpl.html",
            link: function (scope, element, attrs) {
                if (!angular.isArray(scope.jbSrc)) {
                    throw "jbSrc must be array!";
                }
                scope.selection = '';
                scope.otherVal = '';
                setup(scope.jbVal);
                function setup(val) {
                    if (val) {
                        if (scope.jbSrc.indexOf(val) > -1) {
                            scope.selection = val;
                        } else if (scope.jbOther) {
                            scope.selection = 'other';
                            scope.otherVal = val;
                        } else {
                            scope.selection = '';
                            scope.otherVal = '';
                        }
                    }
                }

                function updateJbVal() {
                    scope.jbVal = scope.selection === 'other'? scope.otherVal: scope.selection;
                }

                scope.select = function select(val) {
                    scope.selection = val;
                    if (val !== 'other') {
                        scope.otherVal = '';
                    }
                    updateJbVal();
                };

                scope.$watch('otherVal', function (newval) {
                    if (newval) {
                        scope.selection = 'other';
                    }
                    updateJbVal();
                });

                scope.$watch('jbVal', setup);
            }
        };
    }]);

(function() {
    var module = angular.module('jb.ui');

    module.provider('$jbSelect', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'select',
            prefixEvent: '$select',
            placement: 'bottom-left',
            template: 'jb/ui/select/select.tpl.html',
            trigger: 'focus',
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            multiple: false,
            allNoneButtons: false,
            sort: true,
            caretHtml: '&nbsp;<span class="caret"></span>',
            placeholder: '下拉选择',
            allText: 'All',
            noneText: 'None',
            maxLength: 3,
            maxLengthHtml: 'selected',
            iconCheckmark: 'glyphicon glyphicon-ok'
        };

        this.$get = ["$window", "$document", "$rootScope", "$jbTip", "$timeout", function ($window, $document, $rootScope, $jbTip, $timeout) {

            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/ig.test($window.navigator.userAgent);
            var isTouch = ('createTouch' in $window.document) && isNative;

            function SelectFactory(element, controller, config) {

                var $select = {};

                // Common vars
                var options = angular.extend({}, defaults, config);

                // parse sort option value to support attribute as string
                // when binded to interpolated value
                options.sort = options.sort.toString().match(/true|1/i);

                $select = $jbTip(element, options);
                var scope = $select.$scope;

                scope.$matches = [];
                scope.$activeIndex = -1;
                scope.$isMultiple = options.multiple;
                scope.$showAllNoneButtons = options.allNoneButtons && options.multiple;
                scope.$iconCheckmark = options.iconCheckmark;
                scope.$allText = options.allText;
                scope.$noneText = options.noneText;

                scope.$activate = function (index) {
                    scope.$$postDigest(function () {
                        $select.activate(index);
                    });
                };

                scope.$select = function (index, evt) {
                    scope.$$postDigest(function () {
                        $select.select(index);
                    });
                };

                scope.$isVisible = function () {
                    return $select.$isVisible();
                };

                scope.$isActive = function (index) {
                    return $select.$isActive(index);
                };

                scope.$selectAll = function () {
                    for (var i = 0; i < scope.$matches.length; i++) {
                        if (!scope.$isActive(i)) {
                            scope.$select(i);
                        }
                    }
                };

                scope.$selectNone = function () {
                    for (var i = 0; i < scope.$matches.length; i++) {
                        if (scope.$isActive(i)) {
                            scope.$select(i);
                        }
                    }
                };

                // Public methods

                $select.update = function (matches) {
                    scope.$matches = matches;
                    $select.$updateActiveIndex();
                };

                $select.activate = function (index) {
                    if (options.multiple) {
                        if ($select.$isActive(index)) scope.$activeIndex.splice(scope.$activeIndex.indexOf(index), 1); else scope.$activeIndex.push(index);
                        if (options.sort) scope.$activeIndex.sort();
                    } else {
                        scope.$activeIndex = index;
                    }
                    return scope.$activeIndex;
                };

                $select.select = function (index) {
                    var value = scope.$matches[index].value;
                    scope.$apply(function () {
                        $select.activate(index);
                        if (options.multiple) {
                            controller.$setViewValue(scope.$activeIndex.map(function (index) {
                                return scope.$matches[index].value;
                            }));
                        } else {
                            controller.$setViewValue(value);
                            // Hide if single select
                            $select.hide();
                        }
                    });
                    // Emit event
                    scope.$emit(options.prefixEvent + '.select', value, index, $select);
                };

                // Protected methods

                $select.$updateActiveIndex = function () {
                    if (controller.$modelValue && scope.$matches.length) {
                        if (options.multiple && angular.isArray(controller.$modelValue)) {
                            scope.$activeIndex = controller.$modelValue.map(function (value) {
                                return $select.$getIndex(value);
                            });
                        } else {
                            scope.$activeIndex = $select.$getIndex(controller.$modelValue);
                        }
                    } else if (scope.$activeIndex >= scope.$matches.length) {
                        scope.$activeIndex = options.multiple ? [] : 0;
                    }
                };

                $select.$isVisible = function () {
                    if (!options.minLength || !controller) {
                        return scope.$matches.length;
                    }
                    // minLength support
                    return scope.$matches.length && controller.$viewValue.length >= options.minLength;
                };

                $select.$isActive = function (index) {
                    if (options.multiple) {
                        return scope.$activeIndex.indexOf(index) !== -1;
                    } else {
                        return scope.$activeIndex === index;
                    }
                };

                $select.$getIndex = function (value) {
                    var l = scope.$matches.length, i = l;
                    if (!l) return;
                    for (i = l; i--;) {
                        if (scope.$matches[i].value === value) break;
                    }
                    if (i < 0) return;
                    return i;
                };

                $select.$onMouseDown = function (evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        targetEl.triggerHandler('click');
                    }
                };

                $select.$onKeyDown = function (evt) {
                    if (!/(9|13|38|40)/.test(evt.keyCode)) return;
                    evt.preventDefault();
                    evt.stopPropagation();

                    // release focus on tab
                    if (options.multiple && evt.keyCode === 9) {
                        return $select.hide();
                    }

                    // Select with enter
                    if (!options.multiple && (evt.keyCode === 13 || evt.keyCode === 9)) {
                        return $select.select(scope.$activeIndex);
                    }

                    if (!options.multiple) {
                        // Navigate with keyboard
                        if (evt.keyCode === 38 && scope.$activeIndex > 0) scope.$activeIndex--;
                        else if (evt.keyCode === 38 && scope.$activeIndex < 0) scope.$activeIndex = scope.$matches.length - 1;
                        else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1) scope.$activeIndex++;
                        else if (angular.isUndefined(scope.$activeIndex)) scope.$activeIndex = 0;
                        scope.$digest();
                    }
                };

                // Overrides

                var _show = $select.show;
                $select.show = function () {
                    _show();
                    if (options.multiple) {
                        $select.$element.addClass('select-multiple');
                    }
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        $select.$element.on(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
                        if (options.keyboard) {
                            element.on('keydown', $select.$onKeyDown);
                        }
                    }, 0, false);
                };

                var _hide = $select.hide;
                $select.hide = function () {
                    if (!options.multiple && !controller.$modelValue) {
                        scope.$activeIndex = -1;
                    }
                    $select.$element.off(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
                    if (options.keyboard) {
                        element.off('keydown', $select.$onKeyDown);
                    }
                    _hide(true);
                };

                return $select;

            }

            SelectFactory.defaults = defaults;
            return SelectFactory;

        }];

    });

    module.directive('jbSelect', ["$window", "$parse", "$q", "$jbSelect", "$jbParseOptions", function ($window, $parse, $q, $jbSelect, $jbParseOptions) {

        var defaults = $jbSelect.defaults;

        return {
            restrict: 'EAC',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                // Directive options
                var options = {scope: scope, placeholder: defaults.placeholder};
                angular.forEach(['placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'template', 'placeholder', 'multiple', 'allNoneButtons', 'maxLength', 'maxLengthHtml', 'allText', 'noneText', 'iconCheckmark', 'autoClose', 'id', 'sort', 'caretHtml'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Add support for select markup
                if (element[0].nodeName.toLowerCase() === 'select') {
                    var inputEl = element;
                    inputEl.css('display', 'none');
                    element = angular.element('<button type="button" class="btn btn-default"></button>');
                    inputEl.after(element);
                }

                // Build proper bsOptions
                var parsedOptions = $jbParseOptions(attr.jbOptions);

                // Initialize select
                var select = $jbSelect(element, controller, options);

                // Watch bsOptions values before filtering for changes
                var watchedOptions = parsedOptions.$match[7].replace(/\|.+/, '').trim();
                scope.$watch(watchedOptions, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', watchedOptions, newValue, oldValue);
                    parsedOptions.valuesFn(scope, controller)
                        .then(function (values) {
                            select.update(values);
                            controller.$render();
                        });
                }, true);

                // Watch model for changes
                scope.$watch(attr.ngModel, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.ngModel, newValue, oldValue);
                    select.$updateActiveIndex();
                    controller.$render();
                }, true);

                // Model rendering in view
                controller.$render = function () {
                    // console.warn('$render', element.attr('ng-model'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var selected, index;
                    if (options.multiple && angular.isArray(controller.$modelValue)) {
                        selected = controller.$modelValue.map(function (value) {
                            index = select.$getIndex(value);
                            return angular.isDefined(index) ? select.$scope.$matches[index].label : false;
                        }).filter(angular.isDefined);
                        if (selected.length > (options.maxLength || defaults.maxLength)) {
                            selected = selected.length + ' ' + (options.maxLengthHtml || defaults.maxLengthHtml);
                        } else {
                            selected = selected.join(', ');
                        }
                    } else {
                        index = select.$getIndex(controller.$modelValue);
                        selected = angular.isDefined(index) ? select.$scope.$matches[index].label : false;
                    }
                    element.html((selected ? selected : options.placeholder) + (options.caretHtml ? options.caretHtml : defaults.caretHtml));
                };

                if (options.multiple) {
                    controller.$isEmpty = function (value) {
                        return !value || value.length === 0;
                    };
                }

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (select) select.destroy();
                    options = null;
                    select = null;
                });

            }
        };

    }]);
})();
(function (ng) {
    "use strict";
    ng.module('jb.ui.table', ['jb.filter']);
})(angular);
//ref https://github.com/angular-ui/bootstrap/blob/bootstrap3/src/tabs/tabs.js

angular.module('jb.ui')

    .controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
        var ctrl = this,
            tabs = ctrl.tabs = $scope.tabs = [];

        ctrl.select = function (tab) {
            angular.forEach(tabs, function (tab) {
                tab.active = false;
            });
            tab.active = true;
        };

        ctrl.addTab = function addTab(tab) {
            tabs.push(tab);
            if (tabs.length === 1 || tab.active) {
                ctrl.select(tab);
            }
        };

        ctrl.removeTab = function removeTab(tab) {
            var index = tabs.indexOf(tab);
            //Select a new tab if the tab to be removed is selected
            if (tab.active && tabs.length > 1) {
                //If this is the last tab, select the previous tab. else, the next tab.
                var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
                ctrl.select(tabs[newActiveIndex]);
            }
            tabs.splice(index, 1);
        };
    }])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 * @param {string=} direction  What direction the tabs should be rendered. Available:
 * 'right', 'left', 'below'.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <tabset>
 <tab heading="Tab 1"><b>First</b> Content!</tab>
 <tab heading="Tab 2"><i>Second</i> Content!</tab>
 </tabset>
 <hr />
 <tabset vertical="true">
 <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
 <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
 </tabset>
 <tabset justified="true">
 <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
 <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
 </tabset>
 </file>
 </example>
 */
    .directive('tabset', function () {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            require: '^tabset',
            scope: {},
            controller: 'TabsetController',
            templateUrl: 'jb/ui/tabs/tabset.tpl.html',
            compile: function (elm, attrs, transclude) {
                return function (scope, element, attrs, tabsetCtrl) {
                    scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
                    scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
                    scope.type = angular.isDefined(attrs.type) ? scope.$parent.$eval(attrs.type) : 'tabs';
                    scope.direction = angular.isDefined(attrs.direction) ? scope.$parent.$eval(attrs.direction) : 'top';
                    scope.tabsAbove = (scope.direction != 'below');
                    tabsetCtrl.$scope = scope;
                    tabsetCtrl.$transcludeFn = transclude;
                };
            }
        };
    })

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <div ng-controller="TabsDemoCtrl">
 <button class="btn btn-small" ng-click="items[0].active = true">
 Select item 1, using active binding
 </button>
 <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
 Enable/disable item 2, using disabled binding
 </button>
 <br />
 <tabset>
 <tab heading="Tab 1">First Tab</tab>
 <tab select="alertMe()">
 <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
 Second Tab, with alert callback and html heading!
 </tab>
 <tab ng-repeat="item in items"
 heading="{{item.title}}"
 disabled="item.disabled"
 active="item.active">
 {{item.content}}
 </tab>
 </tabset>
 </div>
 </file>
 <file name="script.js">
 function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
 </file>
 </example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
 <example module="ui.bootstrap">
 <file name="index.html">
 <tabset>
 <tab>
 <tab-heading><b>HTML</b> in my titles?!</tab-heading>
 And some content, too!
 </tab>
 <tab>
 <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
 That's right.
 </tab>
 </tabset>
 </file>
 </example>
 */
    .directive('tab', ['$parse', function ($parse) {
        return {
            require: '^tabset',
            restrict: 'EA',
            replace: true,
            templateUrl: 'jb/ui/tabs/tab.tpl.html',
            transclude: true,
            scope: {
                heading: '@',
                onSelect: '&select', //This callback is called in contentHeadingTransclude
                //once it inserts the tab's content into the dom
                onDeselect: '&deselect'
            },
            controller: function () {
                //Empty controller so other directives can require being 'under' a tab
            },
            compile: function (elm, attrs, transclude) {
                return function postLink(scope, elm, attrs, tabsetCtrl) {
                    var getActive, setActive;
                    if (attrs.active) {
                        getActive = $parse(attrs.active);
                        setActive = getActive.assign;
                        scope.$parent.$watch(getActive, function updateActive(value, oldVal) {
                            // Avoid re-initializing scope.active as it is already initialized
                            // below. (watcher is called async during init with value ===
                            // oldVal)
                            if (value !== oldVal) {
                                scope.active = !!value;
                            }
                        });
                        scope.active = getActive(scope.$parent);
                    } else {
                        setActive = getActive = angular.noop;
                    }

                    scope.$watch('active', function (active) {
                        // Note this watcher also initializes and assigns scope.active to the
                        // attrs.active expression.
                        setActive(scope.$parent, active);
                        if (active) {
                            tabsetCtrl.select(scope);
                            scope.onSelect();
                        } else {
                            scope.onDeselect();
                        }
                    });

                    scope.disabled = false;
                    if (attrs.disabled) {
                        scope.$parent.$watch($parse(attrs.disabled), function (value) {
                            scope.disabled = !!value;
                        });
                    }

                    scope.select = function () {
                        if (!scope.disabled) {
                            scope.active = true;
                        }
                    };

                    tabsetCtrl.addTab(scope);
                    scope.$on('$destroy', function () {
                        tabsetCtrl.removeTab(scope);
                    });


                    //We need to transclude later, once the content container is ready.
                    //when this link happens, we're inside a tab heading.
                    scope.$transcludeFn = transclude;
                };
            }
        };
    }])

    .directive('tabHeadingTransclude', [function () {
        return {
            restrict: 'A',
            require: '^tab',
            link: function (scope, elm, attrs, tabCtrl) {
                scope.$watch('headingElement', function updateHeadingElement(heading) {
                    if (heading) {
                        elm.html('');
                        elm.append(heading);
                    }
                });
            }
        };
    }])

    .directive('tabContentTransclude', function () {
        return {
            restrict: 'A',
            require: '^tabset',
            link: function (scope, elm, attrs) {
                var tab = scope.$eval(attrs.tabContentTransclude);

                //Now our tab is ready to be transcluded: both the tab heading area
                //and the tab content area are loaded.  Transclude 'em both.
                tab.$transcludeFn(tab.$parent, function (contents) {
                    angular.forEach(contents, function (node) {
                        if (isTabHeading(node)) {
                            //Let tabHeadingTransclude know.
                            tab.headingElement = node;
                        } else {
                            elm.append(node);
                        }
                    });
                });
            }
        };
        function isTabHeading(node) {
            return node.tagName && (
                node.hasAttribute('tab-heading') ||
                    node.hasAttribute('data-tab-heading') ||
                    node.tagName.toLowerCase() === 'tab-heading' ||
                    node.tagName.toLowerCase() === 'data-tab-heading'
                );
        }
    })

    .directive('tabsetTitles', function () {
        return {
            restrict: 'A',
            require: '^tabset',
            templateUrl: 'jb/ui/tabs/tabset-titles.tpl.html',
            replace: true,
            link: function (scope, elm, attrs, tabsetCtrl) {
                if (!scope.$eval(attrs.tabsetTitles)) {
                    elm.remove();
                } else {
                    //now that tabs location has been decided, transclude the tab titles in
                    tabsetCtrl.$transcludeFn(tabsetCtrl.$scope.$parent, function (node) {
                        elm.append(node);
                    });
                }
            }
        };
    });

angular.module('jb.ui')
    .provider('$jbTip', function () {
        var defaults = this.defaults = {
            animation: 'am-fade',
            customClass: '',
            prefixClass: 'tooltip',
            prefixEvent: 'tooltip',
            container: false,
            target: false,
            placement: 'top',
            template: 'jb/ui/tooltip/tooltip.tpl.html',
            contentTemplate: false,
            trigger: 'hover focus',
            keyboard: false,
            html: true,
            show: false,
            title: '',
            type: '',
            delay: 0,
            autoClose: false,
            bsEnabled: true
        };
        this.$get = ["$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "$sce", "$$rAF", "$timeout", "$jbPosition", function ($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $sce, $$rAF, $timeout, $jbPosition) {//dimensions,

            var trim = String.prototype.trim;
            var isTouch = 'createTouch' in $window.document;
            var htmlReplaceRegExp = /ng-bind="/ig;
            var $body = angular.element($window.document);

            function TooltipFactory(element, config) {

                var $tooltip = {};

                // Common vars
                var nodeName = element[0].nodeName.toLowerCase();
                var options = $tooltip.$options = angular.extend({}, defaults, config);
                $tooltip.$promise = fetchTemplate(options.template);
                var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                if (options.delay && angular.isString(options.delay)) {
                    var split = options.delay.split(',').map(parseFloat);
                    options.delay = split.length > 1 ? {show: split[0], hide: split[1]} : split[0];
                }

                // store $id to identify the triggering element in events
                // give priority to options.id, otherwise, try to use
                // element id if defined
                $tooltip.$id = options.id || element.attr('id') || '';

                // Support scope as string options
                if (options.title) {
                    scope.title = $sce.trustAsHtml(options.title);
                }

                // Provide scope helpers
                scope.$setEnabled = function (isEnabled) {
                    scope.$$postDigest(function () {
                        $tooltip.setEnabled(isEnabled);
                    });
                };
                scope.$hide = function () {
                    scope.$$postDigest(function () {
                        $tooltip.hide();
                    });
                };
                scope.$show = function () {
                    scope.$$postDigest(function () {
                        $tooltip.show();
                    });
                };
                scope.$toggle = function () {
                    scope.$$postDigest(function () {
                        $tooltip.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $tooltip.$isShown = scope.$isShown = false;

                // Private vars
                var timeout, hoverState;

                // Support contentTemplate option
                if (options.contentTemplate) {
                    $tooltip.$promise = $tooltip.$promise.then(function (template) {
                        var templateEl = angular.element(template);
                        return fetchTemplate(options.contentTemplate)
                            .then(function (contentTemplate) {
                                var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
                                if (!contentEl.length) contentEl = findElement('[ng-bind="title"]', templateEl[0]);
                                contentEl.removeAttr('ng-bind').html(contentTemplate);
                                return templateEl[0].outerHTML;
                            });
                    });
                }

                // Fetch, compile then initialize tooltip
                var tipLinker, tipElement, tipTemplate, tipContainer, tipScope;
                $tooltip.$promise.then(function (template) {
                    if (angular.isObject(template)) template = template.data;
                    if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
                    template = trim.apply(template);
                    tipTemplate = template;
                    tipLinker = $compile(template);
                    $tooltip.init();
                });

                $tooltip.init = function () {

                    // Options: delay
                    if (options.delay && angular.isNumber(options.delay)) {
                        options.delay = {
                            show: options.delay,
                            hide: options.delay
                        };
                    }

                    // Replace trigger on touch devices ?
                    // if(isTouch && options.trigger === defaults.trigger) {
                    //   options.trigger.replace(/hover/g, 'click');
                    // }

                    // Options : container
                    if (options.container === 'self') {
                        tipContainer = element;
                    } else if (angular.isElement(options.container)) {
                        tipContainer = options.container;
                    } else if (options.container) {
                        tipContainer = findElement(options.container);
                    }

                    // Options: trigger
                    bindTriggerEvents();

                    // Options: target
                    if (options.target) {
                        options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
                    }

                    // Options: show
                    if (options.show) {
                        scope.$$postDigest(function () {
                            if (options.trigger === 'focus') element[0].focus();
                            else $tooltip.show();
                        });
                    }

                };

                $tooltip.destroy = function () {

                    // Unbind events
                    unbindTriggerEvents();

                    // Remove element
                    destroyTipElement();

                    // Destroy scope
                    scope.$destroy();

                };

                $tooltip.enter = function () {

                    clearTimeout(timeout);
                    hoverState = 'in';
                    if (!options.delay || !options.delay.show) {
                        return $tooltip.show();
                    }

                    timeout = setTimeout(function () {
                        if (hoverState === 'in') $tooltip.show();
                    }, options.delay.show);

                };

                $tooltip.show = function () {
                    if (!options.bsEnabled || $tooltip.$isShown) return;

                    scope.$emit(options.prefixEvent + '.show.before', $tooltip);
                    var parent, after;
                    if (options.container) {
                        parent = tipContainer;
                        if (tipContainer[0].lastChild) {
                            after = angular.element(tipContainer[0].lastChild);
                        } else {
                            after = null;
                        }
                    } else {
                        parent = null;
                        after = element;
                    }


                    // Hide any existing tipElement
                    if (tipElement) destroyTipElement();
                    // Fetch a cloned element linked from template
                    tipScope = $tooltip.$scope.$new();
                    tipElement = $tooltip.$element = tipLinker(tipScope, function (clonedElement, scope) {
                    });

                    // Set the initial positioning.  Make the tooltip invisible
                    // so IE doesn't try to focus on it off screen.
                    tipElement.css({top: '-9999px', left: '-9999px', display: 'block', visibility: 'hidden'});

                    // Options: animation
                    if (options.animation) tipElement.addClass(options.animation);
                    // Options: type
                    if (options.type) tipElement.addClass(options.prefixClass + '-' + options.type);
                    // Options: custom classes
                    if (options.customClass) tipElement.addClass(options.customClass);

                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    var promise = $animate.enter(tipElement, parent, after, enterAnimateCallback);
                    if (promise && promise.then) promise.then(enterAnimateCallback);

                    $tooltip.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    $$rAF(function () {
                        $tooltip.$applyPlacement();

                        // Once placed, make the tooltip visible
                        if (tipElement) tipElement.css({visibility: 'visible'});
                    }); // var a = bodyEl.offsetWidth + 1; ?

                    // Bind events
                    if (options.keyboard) {
                        if (options.trigger !== 'focus') {
                            $tooltip.focus();
                        }
                        bindKeyboardEvents();
                    }

                    if (options.autoClose) {
                        bindAutoCloseEvents();
                    }

                };

                function enterAnimateCallback() {
                    scope.$emit(options.prefixEvent + '.show', $tooltip);
                }

                $tooltip.leave = function () {

                    clearTimeout(timeout);
                    hoverState = 'out';
                    if (!options.delay || !options.delay.hide) {
                        return $tooltip.hide();
                    }
                    timeout = setTimeout(function () {
                        if (hoverState === 'out') {
                            $tooltip.hide();
                        }
                    }, options.delay.hide);

                };

                var _blur;
                var _tipToHide;
                $tooltip.hide = function (blur) {

                    if (!$tooltip.$isShown) return;
                    scope.$emit(options.prefixEvent + '.hide.before', $tooltip);

                    // store blur value for leaveAnimateCallback to use
                    _blur = blur;

                    // store current tipElement reference to use
                    // in leaveAnimateCallback
                    _tipToHide = tipElement;

                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    var promise = $animate.leave(tipElement, leaveAnimateCallback);
                    if (promise && promise.then) promise.then(leaveAnimateCallback);

                    $tooltip.$isShown = scope.$isShown = false;
                    safeDigest(scope);

                    // Unbind events
                    if (options.keyboard && tipElement !== null) {
                        unbindKeyboardEvents();
                    }

                    if (options.autoClose && tipElement !== null) {
                        unbindAutoCloseEvents();
                    }
                };

                function leaveAnimateCallback() {
                    scope.$emit(options.prefixEvent + '.hide', $tooltip);

                    // check if current tipElement still references
                    // the same element when hide was called
                    if (tipElement === _tipToHide) {
                        // Allow to blur the input when hidden, like when pressing enter key
                        if (_blur && options.trigger === 'focus') {
                            return element[0].blur();
                        }

                        // clean up child scopes
                        destroyTipElement();
                    }
                }

                $tooltip.toggle = function () {
                    if( $tooltip.$isShown) $tooltip.leave() ;
                    else $tooltip.enter();
                };

                $tooltip.focus = function () {
                    tipElement[0].focus();
                };

                $tooltip.setEnabled = function (isEnabled) {
                    options.bsEnabled = isEnabled;
                };

                // Protected methods

                $tooltip.$applyPlacement = function () {
                    if (!tipElement) return;

                    // Determine if we're doing an auto or normal placement
                    var placement = options.placement,
                        autoToken = /\s?auto?\s?/i,
                        autoPlace = autoToken.test(placement);

                    if (autoPlace) {
                        placement = placement.replace(autoToken, '') || defaults.placement;
                    }

                    // Need to add the position class before we get
                    // the offsets
                    tipElement.addClass(options.placement);

                    // Get the position of the target element
                    // and the height and width of the tooltip so we can center it.
                    var elementPosition = getPosition(),
                        tipWidth = tipElement.prop('offsetWidth'),
                        tipHeight = tipElement.prop('offsetHeight');

                    // If we're auto placing, we need to check the positioning
                    if (autoPlace) {
                        var originalPlacement = placement;
                        var container = options.container ? angular.element(document.querySelector(options.container)) : element.parent();
                        var containerPosition = getPosition(container);

                        // Determine if the vertical placement
                        if (originalPlacement.indexOf('bottom') >= 0 && elementPosition.bottom + tipHeight > containerPosition.bottom) {
                            placement = originalPlacement.replace('bottom', 'top');
                        } else if (originalPlacement.indexOf('top') >= 0 && elementPosition.top - tipHeight < containerPosition.top) {
                            placement = originalPlacement.replace('top', 'bottom');
                        }

                        // Determine the horizontal placement
                        // The exotic placements of left and right are opposite of the standard placements.  Their arrows are put on the left/right
                        // and flow in the opposite direction of their placement.
                        if ((originalPlacement === 'right' || originalPlacement === 'bottom-left' || originalPlacement === 'top-left') &&
                            elementPosition.right + tipWidth > containerPosition.width) {

                            placement = originalPlacement === 'right' ? 'left' : placement.replace('left', 'right');
                        } else if ((originalPlacement === 'left' || originalPlacement === 'bottom-right' || originalPlacement === 'top-right') &&
                            elementPosition.left - tipWidth < containerPosition.left) {

                            placement = originalPlacement === 'left' ? 'right' : placement.replace('right', 'left');
                        }

                        tipElement.removeClass(originalPlacement).addClass(placement);
                    }

                    // Get the tooltip's top and left coordinates to center it with this directive.
                    var tipPosition = getCalculatedOffset(placement, elementPosition, tipWidth, tipHeight);
                    applyPlacementCss(tipPosition.top, tipPosition.left);
                };

                $tooltip.$onKeyUp = function (evt) {
                    if (evt.which === 27 && $tooltip.$isShown) {
                        $tooltip.hide();
                        evt.stopPropagation();
                    }
                };

                $tooltip.$onFocusKeyUp = function (evt) {
                    if (evt.which === 27) {
                        element[0].blur();
                        evt.stopPropagation();
                    }
                };

                $tooltip.$onFocusElementMouseDown = function (evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Some browsers do not auto-focus buttons (eg. Safari)
                  if(  $tooltip.$isShown ) element[0].blur() ;
                    else element[0].focus();
                };

                // bind/unbind events
                function bindTriggerEvents() {
                    var triggers = options.trigger.split(' ');
                    angular.forEach(triggers, function (trigger) {
                        if (trigger === 'click') {
                            element.on('click', $tooltip.toggle);
                        } else if (trigger !== 'manual') {
                            element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                            element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
                            nodeName === 'button' && trigger !== 'hover' && element.on(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
                        }
                    });
                }

                function unbindTriggerEvents() {
                    var triggers = options.trigger.split(' ');
                    for (var i = triggers.length; i--;) {
                        var trigger = triggers[i];
                        if (trigger === 'click') {
                            element.off('click', $tooltip.toggle);
                        } else if (trigger !== 'manual') {
                            element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                            element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
                            nodeName === 'button' && trigger !== 'hover' && element.off(isTouch ? 'touchstart' : 'mousedown', $tooltip.$onFocusElementMouseDown);
                        }
                    }
                }

                function bindKeyboardEvents() {
                    if (options.trigger !== 'focus') {
                        tipElement.on('keyup', $tooltip.$onKeyUp);
                    } else {
                        element.on('keyup', $tooltip.$onFocusKeyUp);
                    }
                }

                function unbindKeyboardEvents() {
                    if (options.trigger !== 'focus') {
                        tipElement.off('keyup', $tooltip.$onKeyUp);
                    } else {
                        element.off('keyup', $tooltip.$onFocusKeyUp);
                    }
                }

                var _autoCloseEventsBinded = false;

                function bindAutoCloseEvents() {
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function () {
                        // Stop propagation when clicking inside tooltip
                        tipElement.on('click', stopEventPropagation);

                        // Hide when clicking outside tooltip
                        $body.on('click', $tooltip.hide);

                        _autoCloseEventsBinded = true;
                    }, 0, false);
                }

                function unbindAutoCloseEvents() {
                    if (_autoCloseEventsBinded) {
                        tipElement.off('click', stopEventPropagation);
                        $body.off('click', $tooltip.hide);
                        _autoCloseEventsBinded = false;
                    }
                }

                function stopEventPropagation(event) {
                    event.stopPropagation();
                }

                // Private methods

                function getPosition($element) {
                    $element = $element || (options.target || element);

                    var el = $element[0];

                    var elRect = el.getBoundingClientRect();
                    var rect = {};

                    // IE8 has issues with angular.extend and using elRect directly.
                    // By coping the values of elRect into a new object, we can continue to use extend
                    for (var p in elRect) {
                        if (elRect.hasOwnProperty(p)) {
                            rect[p] = elRect[p];
                        }
                    }

                    if (elRect.width === null) {
                        // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
                        rect = angular.extend({}, rect, {
                            width: elRect.right - elRect.left,
                            height: elRect.bottom - elRect.top
                        });
                    }

                    var elPos = {};
                    if (options.container === 'body') {
                        elPos = $jbPosition.offset($element);
                    } else {
                        elPos = $jbPosition.position($element);
                    }
                    return angular.extend({}, rect, elPos);
                }

                function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
                    var offset;
                    var split = placement.split('-');

                    switch (split[0]) {
                        case 'right':
                            offset = {
                                top: position.top + position.height / 2 - actualHeight / 2,
                                left: position.left + position.width
                            };
                            break;
                        case 'bottom':
                            offset = {
                                top: position.top + position.height,
                                left: position.left + position.width / 2 - actualWidth / 2
                            };
                            break;
                        case 'left':
                            offset = {
                                top: position.top + position.height / 2 - actualHeight / 2,
                                left: position.left - actualWidth
                            };
                            break;
                        default:
                            offset = {
                                top: position.top - actualHeight,
                                left: position.left + position.width / 2 - actualWidth / 2
                            };
                            break;
                    }

                    if (!split[1]) {
                        return offset;
                    }

                    // Add support for corners @todo css
                    if (split[0] === 'top' || split[0] === 'bottom') {
                        switch (split[1]) {
                            case 'left':
                                offset.left = position.left;
                                break;
                            case 'right':
                                offset.left = position.left + position.width - actualWidth;
                        }
                    } else if (split[0] === 'left' || split[0] === 'right') {
                        switch (split[1]) {
                            case 'top':
                                offset.top = position.top - actualHeight;
                                break;
                            case 'bottom':
                                offset.top = position.top + position.height;
                        }
                    }

                    return offset;
                }

                function applyPlacementCss(top, left) {
                    tipElement.css({top: top + 'px', left: left + 'px'});
                }

                function destroyTipElement() {
                    // Cancel pending callbacks
                    clearTimeout(timeout);

                    if ($tooltip.$isShown && tipElement !== null) {
                        if (options.autoClose) {
                            unbindAutoCloseEvents();
                        }

                        if (options.keyboard) {
                            unbindKeyboardEvents();
                        }
                    }

                    if (tipScope) {
                        tipScope.$destroy();
                        tipScope = null;
                    }

                    if (tipElement) {
                        tipElement.remove();
                        tipElement = $tooltip.$element = null;
                    }
                }

                return $tooltip;

            }

            // Helper functions

            function safeDigest(scope) {
                scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
            }

            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }

            var fetchPromises = {};

            function fetchTemplate(template) {
                if (fetchPromises[template]) return fetchPromises[template];
                return (fetchPromises[template] = $q.when($templateCache.get(template) || $http.get(template))
                    .then(function (res) {
                        if (angular.isObject(res)) {
                            $templateCache.put(template, res.data);
                            return res.data;
                        }
                        return res;
                    }));
            }

            return TooltipFactory;

        }];
    })

    .directive('jbTip', ["$window", "$location", "$sce", "$jbTip", "$$rAF", function ($window, $location, $sce, $jbTip, $$rAF) {

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // should not parse target attribute, only data-target
                if (element.attr('data-target')) {
                    options.target = element.attr('data-target');
                }

                // overwrite inherited title value when no value specified
                // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
                if (!scope.hasOwnProperty('title')) {
                    scope.title = '';
                }

                // Observe scope attributes for change
                attr.$observe('title', function (newValue) {
                    if (angular.isDefined(newValue) || !scope.hasOwnProperty('title')) {
                        var oldValue = scope.title;
                        scope.title = $sce.trustAsHtml(newValue);
                        angular.isDefined(oldValue) && $$rAF(function () {
                            tooltip && tooltip.$applyPlacement();
                        });
                    }
                });

                // Support scope as an object
                attr.jbTip && scope.$watch(attr.jbTip, function (newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.title = newValue;
                    }
                    angular.isDefined(oldValue) && $$rAF(function () {
                        tooltip && tooltip.$applyPlacement();
                    });
                }, true);

                // Visibility binding support
                attr.bsShow && scope.$watch(attr.bsShow, function (newValue, oldValue) {
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
                    newValue === true ? tooltip.show() : tooltip.hide();
                });

                // Enabled binding support
                attr.bsEnabled && scope.$watch(attr.bsEnabled, function (newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.bsEnabled, newValue, oldValue);
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
                    newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
                });

                // Initialize popover
                var tooltip = $jbTip(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (tooltip) tooltip.destroy();
                    options = null;
                    tooltip = null;
                });

            }
        };

    }]);


(function() {
    var module = angular.module('jb.ui');

    var Ctrl = ['$scope', '$element', '$transclude', function($scope, $element, $transclude){

        var toTransclude;

        $scope.$on('$destroy', function(){
            if(toTransclude){
                toTransclude.remove();
                toTransclude = null;
            }
        });

        this.transclude = function(name, element){
            for(var i = 0; i < toTransclude.length; ++i){
                var el = angular.element(toTransclude[i]);
                if(el.attr('name') === name){
                    element.empty();
                    if(el.attr('jb-transclude-self'))
                        element.append(el);
                    else
                        element.append(el.children());
                    return;
                }
            }
        };

        $transclude(function(clone){
            toTransclude = clone;
        });
    }];
    module.directive('jbTransclude', function(){
        return {
            controller: Ctrl
        };
    });

    module.directive('jbPartial', function(){
        return {
            require: ['^jbTransclude'],
            link: function(scope, element, attrs, ctrls){
                var ctrl = ctrls[0];
                ctrl.transclude(attrs.jbPartial, element);
            }
        };
    });

})();
angular.module('jb.ui')
    .directive('jbTriStateCheckboxTreeview', function () {
        return {
            restrict: 'ECA',
            link: function (scope, element, attrs) {
                element.on('change', function (e) {
                    var checked = $(e.target).prop("checked"),
                        container = $(e.target).parent(),
                        siblings = container.siblings();

                    container.find('input[type="checkbox"]').prop({
                        indeterminate: false,
                        checked: checked
                    });

                    function checkSiblings(el) {
                        var parent = el.parent().parent(),
                            all = true;

                        el.siblings().each(function () {
                             all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
                            return all;
                        });

                        if (all && checked) {
                            parent.children('input[type="checkbox"]').prop({
                                indeterminate: false,
                                checked: checked
                            });
                            checkSiblings(parent);
                        } else if (all && !checked) {
                            parent.children('input[type="checkbox"]').prop("checked", checked);
                            parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                            checkSiblings(parent);
                        } else {
                            el.parents("li").children('input[type="checkbox"]').prop({
                                indeterminate: true,
                                checked: false
                            });
                        }
                    }

                    checkSiblings(container);
                });
            }
        };
    });

(function() {
    var module = angular.module('jb.ui.widget', []);

    var ctrl = ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        var self = this;
        var lst=[];
        $element.addClass('panel-group');
        this.add=function(wg){
            lst.push(wg);
            wg.$on('$destroy', function (event) {
                self.del(wg);
            });
        };
        this.del = function (wg) {
            var index = lst.indexOf(wg);
            if (index !== -1) {
                lst.splice(index, 1);
            }
        };

        this.closeOthers = function (openWg) {
            var multiple = $scope.$eval($attrs.jbWidgets);
            if (!multiple) {
                angular.forEach(lst, function (wg) {
                    if (wg !== openWg) {
                        wg.isHide=true;
                    }
                });
            }
        };
    }];
    module.directive('jbWidgets', function(){
        return {
            controller: ctrl
        };
    });

    module.directive('jbWidget', function(){
        return {
            restrict: 'EA',
            require: '^?jbWidgets',
            transclude: true,
            replace: true,
            templateUrl: 'jb/ui/widget/widget.tpl.html',
            scope: {
                title: '@',
                isHide: '=?',
                showFoot:'=',
                ctx: '=?jbCtx'
            },
            link: function (scope, element, attrs, ctrls) {
                var ctrl=ctrls;
                if(ctrl) {
                    ctrl.add(scope);
                    scope.$watch('isHide', function (value) {
                        if (!value) {
                            ctrl.closeOthers(scope);
                        }
                    });
                }
                scope.$toggle = function () {
                    scope.isHide = !scope.isHide;
                };
            }
        };
    });

})();
(function (ng) {
    "use strict";

    var module = ng.module('jb.ui.table');

    function tableCtr($scope) {

    }
    tableCtr.$inject = ["$scope"];

    module.directive('jbTable', ['$compile', '$q', '$parse',
        function($compile,$q,$parse) {
            return {
                scope:{},
                restrict: "A",
                controller: tableCtr,
                compile: function (tElement, tAttrs, transclude) {
                    var columns = [], i = 0, row = null;
                    angular.forEach(angular.element(tElement.find('tr')), function (tr) {
                        tr = angular.element(tr);
                        if (!tr.hasClass('jb-table-add') && !row) {
                            row = tr;
                        }
                    });
                    if (!row) {
                        return;
                    }
                    angular.forEach(row.find('td'), function (item) {
                        var el = angular.element(item);

                        var parsedAttribute = function (attr, defaultValue) {
                            return function (scope) {
                                return $parse(el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr))(scope, {
                                        $columns: columns
                                    }) || defaultValue;
                            };
                        };

                        var parsedTitle = parsedAttribute('title', ' ');

                        columns.push({
                            id: i++,
                            title: parsedTitle()
                        });
                    });

                    return function (scope, iElement, iAttrs) {
                        scope.$columns = columns;
                        scope.headerTpl = 'jb/ui/table/tableHeader.tpl.html';
                        var headerTemplate = angular.element(document.createElement('thead')).attr('ng-include', 'headerTpl');
                        iElement.addClass('jb-table')
                            .prepend(headerTemplate);

                        $compile(headerTemplate)(scope);
                    };
                }
            };
        }
    ]);


})(angular);

(function (ng) {
    var module = ng.module('jb.ui.table');
    var strFilterOpt={
        empty:'空',
        not_empty:'非空',
        contains: '包含',
        start:'开始为',
        end:'结束为',
        equal:'等于'
    };
    var strFilterCondition = {
        NONE: '无',
        AND: '与',
        OR: '或'
    };

    function tableCtr($scope, $element, $attrs, $filter, $parse, $timeout, $window,jb$) {
        var win = angular.element($window);
        var ctrl = this;
        var orderBy = $filter('orderBy');
        var filter = $filter('filter');
        var fmt=jb$.fmt;
        var $src = $scope.$src = copyRefs($scope.src);
        var cols = [];
        var filtered;
        var tableState = {
            sort: {},
            search: {},
            pagination: {
                start: 0
            }
        };

        function update$src() {
            $scope.$src = copyRefs($scope.meta.ctx.lst);
            ctrl.pipe();
            resize();
        }
        function copyRefs(src) {
            return src ? [].concat(src) : [];
        }

        function resize() {
            function _resize() {
                ng.forEach(cols, function (c) {
                    c.onResize();
                });
            }

            $timeout(_resize, 10, true);
        }

        $scope.$watchCollection("meta.ctx.lst", update$src);
        win.on('resize', resize);

        this.addCol = function (col) {
            cols.push(col);
            col.$on('$destroy', function (event) {
                ctrl.del(col);
            });
        };
        this.del = function (col) {
            var index = cols.indexOf(col);
            if (index !== -1) {
                cols.splice(index, 1);
            }
        };

        this.sortBy = function sortBy(predicate, reverse) {
            tableState.sort.predicate = predicate;
            tableState.sort.reverse = reverse === true;
            return this.pipe();
        };

        $scope.pager = function (p) {
            $scope.meta.filter.page = p;
            $scope.meta.ctx.refresh($scope.meta.filter);
        };
        this.filter = function () {
            var groups = [];
            ng.forEach($scope.meta.cols, function (c) {
                if (c.filter !== undefined) {
                    groups.push(c.filter);
                }
            });
            $scope.meta.filter.groups = groups;
            console.log($scope.meta.filter);
            $scope.meta.ctx.refresh($scope.meta.filter);
        };

        this.pipe = function pipe() {
            filtered = copyRefs($scope.meta.ctx.lst);
            if (tableState.sort.predicate) {
                filtered = orderBy(filtered, tableState.sort.predicate, tableState.sort.reverse);
            }
            $scope.$src = filtered;
        };

        this.bodyTr = function () {
            var tr = '<tr ng-repeat="$row in $src">';
            ng.forEach($scope.meta.cols, function (c) {
                tr+=buildTd(c);
            });
            tr += '</tr>';
            return tr;
        };


        $scope.$on('$destroy', function (event) {
            win.off('resize', resize);
        });

        function buildTd(c) {
            var td, tdAttr,
                tdBody = fmt('{{$row.{0}}}', c.field),
                td_fmt = '<td>{0}</td>',
                td_fmt_attr = '<td {0}>{1}</td>';

            if (c.celltpl) {
                tdBody = c.celltpl;
            }
            else if (c.field) {
                if (c.type === 'int') {
                    tdAttr = 'class="text-right text-middle"';
                }
                else if (c.type === 'date') {
                    tdBody = fmt('{{$row.{0}|date}}', c.field);
                }
                else if (c.type === 'jbzd') {
                    tdAttr = fmt('jb-zd="{0}" jb-zd-dm="$row.{1}"', c.jbzd, c.field);
                }
            }

            if (tdAttr) td = fmt(td_fmt_attr, tdAttr, tdBody);
            else td = fmt(td_fmt, tdBody);

            return td;
        }
    }
    tableCtr.$inject = ["$scope", "$element", "$attrs", "$filter", "$parse", "$timeout", "$window", "jb$"];

    module.directive('jbTable2',["$compile", "$q", "$parse", function($compile,$q,$parse) {
            return {
                replace: true,

                templateUrl: 'jb/ui/table/table.tpl.html',
                scope:{
                    meta:'=jbMeta'
                },
                controller: tableCtr,
                link: function (scope, element, attrs, ctrl) {

                }
            };
        }]
    );
    module.directive('jbTableTh', function () {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    ctrl.addCol(scope);
                    scope.onResize = function () {
                        scope.col.width = element[0].clientWidth;
                    };
                }
            };
        }
    );
    module.directive('jbTableCol', ["$compile", "$q", "$parse", "$jbFilter", function ($compile, $q, $parse, $jbFilter) {
            return {
                require: '^jbTable2',
                restrict: "C",
                replace: true,
                templateUrl: 'jb/ui/table/th.tpl.html',
                link: function (scope, element, attrs, ctrl) {
                    scope.$index = 0;
                    scope.pop = {
                        filterOpt: strFilterOpt,
                        filterCondition: strFilterCondition
                    };
                    scope.onTitle = function () {
                        if (scope.col.sort !== undefined) sort();
                    };
                    scope.onFilter = function () {
                        ctrl.filter();
                    };

                    if (scope.col.filter === true) {
                        scope.col.filter = $jbFilter.group2(null, scope.col.field);
                    }
                    function sort() {
                        scope.$index++;
                        ctrl.sortBy(scope.col.field, scope.$index % 2 === 0);
                    }
                }
            };
        }]
    );

    module.directive('jbTableBody', ["$compile", "$q", "$parse", function ($compile, $q, $parse) {
            return {
                require: '^jbTable2',
                link: function (scope, element, attrs, ctrl) {
                    var content = $compile(ctrl.bodyTr())(scope);
                    element.append(content);
                }
            };
        }]
    );
})(angular);

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/alert/alert.tpl.html',
    '<div class="alert" ng-class="[type ? \'alert-\' + type : null,$placement]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/aside/aside.tpl.html',
    '<div class="modal" tabindex="-1" role="dialog"><div class="modal-backdrop"></div><div class="aside-dialog" ng-class="{\'modal-sm\': $size == \'sm\', \'modal-lg\': $size == \'lg\',\'left\':$placement==\'left\'}"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/checkList/checkList.tpl.html',
    '<label class="checkbox-inline" ng-repeat="s in jbSrc"><input type="checkbox" value="{{s}}" ng-checked="selection.indexOf(s) > -1" ng-click="toggleSelection(s)"> {{s}}</label> <label class="checkbox-inline" ng-show="jbOther"><input type="checkbox" ng-model="otherCk" ng-click="toggleOther()"> 其他</label> <label class="checkbox-inline" ng-show="jbOther"><input type="text" ng-model="otherVal" class="form-control input-sm"></label>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/datetime/datepicker.tpl.html',
    '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px;"><table style="table-layout: fixed; height: 100%; width: 100%;"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize;" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/datetime/timepicker.tpl.html',
    '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto;"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/dropdown/dropdown.tpl.html',
    '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fg.tpl.html',
    '<div class="form-group form-group-sm"><label>{{lb}}</label> <input type="text" class="form-control" ng-model="ip"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fgh.tpl.html',
    '<div class="form-group form-group-sm"><label class="control-label {{w0}}">{{lb}}</label><div class="{{w1}}" ng-transclude=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/form/fgh2.tpl.html',
    '<div class="form-group form-group-sm" jb-transclude=""><label class="control-label {{w0}}">{{lb[0]}}</label><div class="{{w1}}" jb-partial="input1"></div><label class="control-label {{w2}}">{{lb[1]}}</label><div class="{{w3}}" jb-partial="input2"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/modal/modal.tpl.html',
    '<div class="modal fade in" tabindex="-1" role="dialog"><div class="modal-backdrop"></div><div class="modal-dialog" ng-class="{\'modal-sm\': $size == \'sm\', \'modal-lg\': $size == \'lg\',\'center\':$placement==\'center\'}"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$ok()">确定</button> <button type="button" class="btn btn-default" ng-click="$hide()">取消</button></div></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/inputGroupDropdownBtn/inputGroupDropdownBtn.tpl.html',
    '<div class="input-group-btn"><button class="btn btn-default" jb-dropdown-toggle=""><span class="caret"></span></button><ul class="dropdown-menu pull-right"><li ng-repeat="it in jbSrc"><a ng-click="update(it)">{{it}}</a></li></ul></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/pager/pager.tpl.html',
    '<ul class="pager"><li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/pager/pagination.tpl.html',
    '<ul class="pagination"><li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/popover/popover.tpl.html',
    '<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/radioList/radioList.tpl.html',
    '<label class="radio-inline" ng-repeat="s in jbSrc"><input type="radio" value="{{s}}" ng-checked="selection==s" ng-click="select(s)"> {{s}}</label> <label class="radio-inline" ng-show="jbOther"><input type="radio" ng-checked="selection==\'other\'" value="other" ng-click="select(\'other\')"> 其他</label> <label class="checkbox-inline" ng-show="jbOther"><input type="text" ng-model="otherVal" class="form-control input-sm"></label>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/select/select.tpl.html',
    '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default;" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tab.tpl.html',
    '<li ng-class="{active: active, disabled: disabled}"><a ng-click="select()" tab-heading-transclude="">{{heading}}</a></li>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tabset-titles.tpl.html',
    '<ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}"></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tabs/tabset.tpl.html',
    '<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}"><div tabset-titles="tabsAbove"></div><div class="tab-content"><div class="tab-pane" ng-repeat="tab in tabs" ng-class="{active: tab.active}" tab-content-transclude="tab"></div></div><div tabset-titles="!tabsAbove"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/table.tpl.html',
    '<div class="panel panel-default jb-table"><div class="panel-heading"><div ng-repeat="col in meta.cols" class="jb-table-col"></div></div><div class="panel-collapse"><table class="table table-bordered table-hover table-condensed"><thead><tr><th ng-repeat="col in meta.cols" jb-table-th="" class="th">{{col.title}}</th></tr></thead><tbody jb-table-body=""></tbody><tfoot></tfoot></table></div><div class="panel-footer"><jb-pagination ng-if="meta.page" boundary-links="true" total-items="meta.ctx.total" page="meta.ctx.page" max-size="10" items-per-page="meta.filter.perPage" on-select-page="pager(page)" class="pagination-sm pull-right" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></jb-pagination></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/tableHeader.tpl.html',
    '<tr><th ng-repeat="c in $columns">{{c.title}}</th></tr>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/th-opt.tpl.html',
    '<ul tabindex="-1" class="dropdown-menu jb-th-opt" role="menu"><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort-by-alphabet"></span> 升序(最低到最高)</a></li><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort-by-alphabet-alt"></span> 降序(最高到最低)</a></li><li role="presentation"><a role="menuitem" href="#"><span class="glyphicon glyphicon-sort"></span> 不排序</a></li><li class="divider"></li><li ng-if="col.filter!==undefined"><div class="jb-th-opt-filter"><select class="form-control input-sm" ng-model="col.filter.Rules[0].Opt" ng-options="k as v for (k,v) in filterOpt"></select><input type="text" class="form-control input-sm" ng-model="col.filter.Rules[0].Val1"><div class="form-group-sm"><label class="radio-inline" ng-repeat="(k,v) in filterCondition"><input type="radio" value="{{k}}" ng-model="col.filter.Condition"> {{v}}</label></div><select class="form-control input-sm" ng-model="col.filter.Rules[1].Opt" ng-disabled="col.filter.Condition==\'NONE\'" ng-options="k as v for (k,v) in filterOpt"></select><input type="text" class="form-control input-sm" ng-model="col.filter.Rules[1].Val1" ng-disabled="col.filter.Condition==\'NONE\'"><div class="btn-group btn-group-sm pull-right"><button class="btn btn-primary" ng-click="onFilter()">过滤</button> <button class="btn btn-default">清除</button></div></div></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/table/th.tpl.html',
    '<div ng-style="{\'width\':col.width+\'px\'}"><span ng-click="onTitle()">{{col.title}}</span> <span class="jb-th-right"><span ng-if="col.sort!==undefined" class="glyphicon" ng-class="{\'glyphicon-triangle-bottom\':$index%2==1,\'glyphicon-triangle-top\':$index%2==0}"></span> <span ng-if="col.filter!==undefined" class="glyphicon glyphicon-filter"></span> <span class="glyphicon glyphicon-menu-down" jb-pop="pop" data-auto-close="false" data-placement="right-bottom" data-template="jb/ui/table/th-opt.tpl.html"></span></span></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/tooltip/tooltip.tpl.html',
    '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('jb.ui.tpls');
} catch (e) {
  module = angular.module('jb.ui.tpls', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('jb/ui/widget/widget.tpl.html',
    '<div class="panel panel-default" jb-transclude=""><div class="panel-heading" jb-partial="heading"><div jb-partial="actions" class="btn-group btn-group-xs pull-right"><button class="btn btn-default" ng-click="$toggle()">X</button></div><div jb-partial="tools" class="pull-right" style="margin-right: 10px"></div><h4 class="panel-title" jb-partial="title">{{title}}</h4></div><div class="panel-collapse collapse" ng-class="{\'in\':!isHide}" jb-partial="body"><div class="panel-body" jb-partial="content"></div></div><div class="panel-footer" ng-if="showFoot"></div></div>');
}]);
})();

/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.2.2 - 2015-05-29
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function ( window, angular, undefined ) {
/*jshint globalstrict:true*/
'use strict';

var isDefined = angular.isDefined,
  isUndefined = angular.isUndefined,
  isNumber = angular.isNumber,
  isObject = angular.isObject,
  isArray = angular.isArray,
  extend = angular.extend,
  toJson = angular.toJson;
var angularLocalStorage = angular.module('LocalStorageModule', []);

angularLocalStorage.provider('localStorageService', function() {

  // You should set a prefix to avoid overwriting any local storage variables from the rest of your app
  // e.g. localStorageServiceProvider.setPrefix('yourAppName');
  // With provider you can use config as this:
  // myApp.config(function (localStorageServiceProvider) {
  //    localStorageServiceProvider.prefix = 'yourAppName';
  // });
  this.prefix = 'ls';

  // You could change web storage type localstorage or sessionStorage
  this.storageType = 'localStorage';

  // Cookie options (usually in case of fallback)
  // expiry = Number of days before cookies expire // 0 = Does not expire
  // path = The web path the cookie represents
  this.cookie = {
    expiry: 30,
    path: '/'
  };

  // Send signals for each of the following actions?
  this.notify = {
    setItem: true,
    removeItem: false
  };

  // Setter for the prefix
  this.setPrefix = function(prefix) {
    this.prefix = prefix;
    return this;
  };

   // Setter for the storageType
   this.setStorageType = function(storageType) {
     this.storageType = storageType;
     return this;
   };

  // Setter for cookie config
  this.setStorageCookie = function(exp, path) {
    this.cookie.expiry = exp;
    this.cookie.path = path;
    return this;
  };

  // Setter for cookie domain
  this.setStorageCookieDomain = function(domain) {
    this.cookie.domain = domain;
    return this;
  };

  // Setter for notification config
  // itemSet & itemRemove should be booleans
  this.setNotify = function(itemSet, itemRemove) {
    this.notify = {
      setItem: itemSet,
      removeItem: itemRemove
    };
    return this;
  };

  this.$get = ['$rootScope', '$window', '$document', '$parse', function($rootScope, $window, $document, $parse) {
    var self = this;
    var prefix = self.prefix;
    var cookie = self.cookie;
    var notify = self.notify;
    var storageType = self.storageType;
    var webStorage;

    // When Angular's $document is not available
    if (!$document) {
      $document = document;
    } else if ($document[0]) {
      $document = $document[0];
    }

    // If there is a prefix set in the config lets use that with an appended period for readability
    if (prefix.substr(-1) !== '.') {
      prefix = !!prefix ? prefix + '.' : '';
    }
    var deriveQualifiedKey = function(key) {
      return prefix + key;
    };
    // Checks the browser to see if local storage is supported
    var browserSupportsLocalStorage = (function () {
      try {
        var supported = (storageType in $window && $window[storageType] !== null);

        // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
        // is available, but trying to call .setItem throws an exception.
        //
        // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage
        // that exceeded the quota."
        var key = deriveQualifiedKey('__' + Math.round(Math.random() * 1e7));
        if (supported) {
          webStorage = $window[storageType];
          webStorage.setItem(key, '');
          webStorage.removeItem(key);
        }

        return supported;
      } catch (e) {
        storageType = 'cookie';
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
    }());

    // Directly adds a value to local storage
    // If local storage is not available in the browser use cookies
    // Example use: localStorageService.add('library','angular');
    var addToLocalStorage = function (key, value) {
      // Let's convert undefined values to null to get the value consistent
      if (isUndefined(value)) {
        value = null;
      } else {
        value = toJson(value);
      }

      // If this browser does not support local storage use cookies
      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        }

        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: 'cookie'});
        }
        return addToCookies(key, value);
      }

      try {
        if (webStorage) {webStorage.setItem(deriveQualifiedKey(key), value)};
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: self.storageType});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return addToCookies(key, value);
      }
      return true;
    };

    // Directly get a value from local storage
    // Example use: localStorageService.get('library'); // returns 'angular'
    var getFromLocalStorage = function (key) {

      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
          $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
        }

        return getFromCookies(key);
      }

      var item = webStorage ? webStorage.getItem(deriveQualifiedKey(key)) : null;
      // angular.toJson will convert null to 'null', so a proper conversion is needed
      // FIXME not a perfect solution, since a valid 'null' string can't be stored
      if (!item || item === 'null') {
        return null;
      }

      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    };

    // Remove an item from local storage
    // Example use: localStorageService.remove('library'); // removes the key/value pair of library='angular'
    var removeFromLocalStorage = function () {
      var i, key;
      for (i=0; i<arguments.length; i++) {
        key = arguments[i];
        if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
          if (!browserSupportsLocalStorage) {
            $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
          }

          if (notify.removeItem) {
            $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: 'cookie'});
          }
          removeFromCookies(key);
        }
        else {
          try {
            webStorage.removeItem(deriveQualifiedKey(key));
            if (notify.removeItem) {
              $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {
                key: key,
                storageType: self.storageType
              });
            }
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
            removeFromCookies(key);
          }
        }
      }
    };

    // Return array of keys for local storage
    // Example use: var keys = localStorageService.keys()
    var getKeysForLocalStorage = function () {

      if (!browserSupportsLocalStorage) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return false;
      }

      var prefixLength = prefix.length;
      var keys = [];
      for (var key in webStorage) {
        // Only return keys that are for this app
        if (key.substr(0,prefixLength) === prefix) {
          try {
            keys.push(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return [];
          }
        }
      }
      return keys;
    };

    // Remove all data for this app from local storage
    // Also optionally takes a regular expression string and removes the matching key-value pairs
    // Example use: localStorageService.clearAll();
    // Should be used mostly for development purposes
    var clearAllFromLocalStorage = function (regularExpression) {

      // Setting both regular expressions independently
      // Empty strings result in catchall RegExp
      var prefixRegex = !!prefix ? new RegExp('^' + prefix) : new RegExp();
      var testRegex = !!regularExpression ? new RegExp(regularExpression) : new RegExp();

      if (!browserSupportsLocalStorage || self.storageType === 'cookie') {
        if (!browserSupportsLocalStorage) {
          $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        }
        return clearAllFromCookies();
      }

      var prefixLength = prefix.length;

      for (var key in webStorage) {
        // Only remove items that are for this app and match the regular expression
        if (prefixRegex.test(key) && testRegex.test(key.substr(prefixLength))) {
          try {
            removeFromLocalStorage(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
            return clearAllFromCookies();
          }
        }
      }
      return true;
    };

    // Checks the browser to see if cookies are supported
    var browserSupportsCookies = (function() {
      try {
        return $window.navigator.cookieEnabled ||
          ("cookie" in $document && ($document.cookie.length > 0 ||
          ($document.cookie = "test").indexOf.call($document.cookie, "test") > -1));
      } catch (e) {
          $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
          return false;
      }
    }());

    // Directly adds a value to cookies
    // Typically used as a fallback is local storage is not available in the browser
    // Example use: localStorageService.cookie.add('library','angular');
    var addToCookies = function (key, value, daysToExpiry) {

      if (isUndefined(value)) {
        return false;
      } else if(isArray(value) || isObject(value)) {
        value = toJson(value);
      }

      if (!browserSupportsCookies) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      try {
        var expiry = '',
            expiryDate = new Date(),
            cookieDomain = '';

        if (value === null) {
          // Mark that the cookie has expired one day ago
          expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
          value = '';
        } else if (isNumber(daysToExpiry) && daysToExpiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (daysToExpiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        } else if (cookie.expiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        }
        if (!!key) {
          var cookiePath = "; path=" + cookie.path;
          if(cookie.domain){
            cookieDomain = "; domain=" + cookie.domain;
          }
          $document.cookie = deriveQualifiedKey(key) + "=" + encodeURIComponent(value) + expiry + cookiePath + cookieDomain;
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
        return false;
      }
      return true;
    };

    // Directly get a value from a cookie
    // Example use: localStorageService.cookie.get('library'); // returns 'angular'
    var getFromCookies = function (key) {
      if (!browserSupportsCookies) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      var cookies = $document.cookie && $document.cookie.split(';') || [];
      for(var i=0; i < cookies.length; i++) {
        var thisCookie = cookies[i];
        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1,thisCookie.length);
        }
        if (thisCookie.indexOf(deriveQualifiedKey(key) + '=') === 0) {
          var storedValues = decodeURIComponent(thisCookie.substring(prefix.length + key.length + 1, thisCookie.length))
          try {
            return JSON.parse(storedValues);
          } catch(e) {
            return storedValues
          }
        }
      }
      return null;
    };

    var removeFromCookies = function (key) {
      addToCookies(key,null);
    };

    var clearAllFromCookies = function () {
      var thisCookie = null, thisKey = null;
      var prefixLength = prefix.length;
      var cookies = $document.cookie.split(';');
      for(var i = 0; i < cookies.length; i++) {
        thisCookie = cookies[i];

        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1, thisCookie.length);
        }

        var key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));
        removeFromCookies(key);
      }
    };

    var getStorageType = function() {
      return storageType;
    };

    // Add a listener on scope variable to save its changes to local storage
    // Return a function which when called cancels binding
    var bindToScope = function(scope, key, def, lsKey) {
      lsKey = lsKey || key;
      var value = getFromLocalStorage(lsKey);

      if (value === null && isDefined(def)) {
        value = def;
      } else if (isObject(value) && isObject(def)) {
        value = extend(def, value);
      }

      $parse(key).assign(scope, value);

      return scope.$watch(key, function(newVal) {
        addToLocalStorage(lsKey, newVal);
      }, isObject(scope[key]));
    };

    // Return localStorageService.length
    // ignore keys that not owned
    var lengthOfLocalStorage = function() {
      var count = 0;
      var storage = $window[storageType];
      for(var i = 0; i < storage.length; i++) {
        if(storage.key(i).indexOf(prefix) === 0 ) {
          count++;
        }
      }
      return count;
    };

    return {
      isSupported: browserSupportsLocalStorage,
      getStorageType: getStorageType,
      set: addToLocalStorage,
      add: addToLocalStorage, //DEPRECATED
      get: getFromLocalStorage,
      keys: getKeysForLocalStorage,
      remove: removeFromLocalStorage,
      clearAll: clearAllFromLocalStorage,
      bind: bindToScope,
      deriveKey: deriveQualifiedKey,
      length: lengthOfLocalStorage,
      cookie: {
        isSupported: browserSupportsCookies,
        set: addToCookies,
        add: addToCookies, //DEPRECATED
        get: getFromCookies,
        remove: removeFromCookies,
        clearAll: clearAllFromCookies
      }
    };
  }];
});
})( window, window.angular );