(function(ng){

    var module=ng.module('jb.res', [ 'ngResource' ] );

    module.factory('jbRes', function ($resource) {
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
    });

    //jb.res for only get & post
    module.factory('jbResGP', function ($resource) {
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
    });

})(angular);