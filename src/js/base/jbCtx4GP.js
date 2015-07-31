(function (ng) {
    //4gp  for get and post only
    var module = ng.module('jb.ctx4gp', ['jb.sys', 'jb.res']);

    module.factory('jbCtx4gp', function (jbSys, jbResGP) {
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
    });

    module.factory('jbCtxP4gp', function (jbResGP) {
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
    });

    module.factory('jbCtxL4gp', function (jbResGP) {
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
    });

})(angular);