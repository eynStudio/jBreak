(function (ng) {
    var module = ng.module('jb.ctx', ['jb.sys', 'jb.res', 'jb.ctx4gp']);

    function updateParams(ctx,params,newParams) {
        ctx.params = newParams ? params||{} : ng.extend(ctx.params, params||{});
    }

    module.factory('jbCtx', function (jbRes) {
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
    });

    module.factory('jbCtxL', function (jbRes) {
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
    });

    module.factory('jbCtxP', function (jbCtxL) {
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
    });

})(angular);