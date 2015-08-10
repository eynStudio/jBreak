(function (ng) {
    var module = ng.module('jb.ctx', ['jb.sys', 'jb.res', 'jb.ctx4gp']);

    function updateParams(ctx,params,newParams) {
        ctx.params = newParams ? params || {} : ng.extend(ctx.params || {}, params || {});
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
                editId:editId,
                save: save,
                del:del,
                _updateData:updateData
            };
            return ctx;

            function refresh(params,newParams) {
                updateParams(ctx,params,newParams);
                res.query(ctx.params,ctx._updateData);
            }

            function add() {
                (ctx.beforeAdd || ng.noop)();
                ctx._obj=null;
                ctx.obj=res.create();
            }
            function edit(it) {
                (ctx.beforeEdit || ng.noop)();
                ctx._obj = it;
                ctx.obj = ng.copy(it);
            }
            function editId(id) {
                (ctx.beforeEdit || ng.noop)();
                ctx.obj = id ? res.get({id: id}) : add();
            }
            function save() {
                (ctx.beforeSave || ng.noop)();
                res.save(ctx.obj,ctx._updateData);
            }
            function del(id){
                (ctx.beforeDel || ng.noop)();
                res.del({id:id},ctx._updateData);
            }
            function updateData(data){
                ctx.lst = data;
                ctx._obj=ctx.obj = null;
            }
        }
    });

    module.factory('jbCtxP', function (jbCtxL) {
        return function(url, params, methods) {
            var ctx = jbCtxL(url, params, methods);
            ctx = ng.extend(ctx, {
                refresh: refresh,
                pager: pager,
                _updateData:updateData,
                total: 0,
                params:{filter: ''},
                filter: {page: 1, perPage: 20}
            });
            return ctx;

            function refresh(filter,params,newParams) {
                if (filter) ctx.filter = filter;
                updateParams(ctx,params,newParams);
                ctx.res.post(ctx.params, ctx.filter,ctx._updateData);
            }

            function pager(page) {
                ctx.filter.page = page;
                refresh();
            }

            function updateData(data){
                ctx.lst = data.Items;
                ctx.total = data.Total;
                ctx._obj=ctx.obj = null;
            }
        }
    });

})(angular);