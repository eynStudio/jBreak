(function (ng) {
    var module = ng.module('jb.ctx', ['restangular']);

    function updateParams(ctx,params,newParams) {
        ctx.params = newParams ? params || {} : ng.extend(ctx.params || {}, params || {});
    }

    module.provider('$jbCtx', function () {
        this.$get = function ($q,Restangular,$state,$stateParams) {
            return {
                lst:ctxLst,
                page:ctxPage,
                obj:ctxObj,
                lstObj:ctxLstObj,
                pageObj:ctxPageObj,
                objSub:ctxObjSub
            };

            function ctxLstObj(name,pCtx,id){
                var ctx=ctxLst(name,pCtx);
                ctx.eCtx=ctxObj(name,ctx,id||'id');
                return ctx;
            }

            function ctxPageObj(name,pCtx,id){
                var ctx=ctxPage(name,pCtx);
                ctx.eCtx=ctxObj(name,ctx,id||'id');
                return ctx;
            }

            function ctxLst(name,pCtx) {
                var ctx = {
                    name: name,
                    p: pCtx,
                    lst: [],
                    res: res,
                    one:one,
                    refresh: refresh,
                    updateData: updateData
                };
                return ctx;
                function res() {
                    return pCtx ? pCtx.res() : Restangular;
                }
                function one(id) {
                    return res().one(name,id||'');
                }
                function refresh() {
                    return res().all(name).getList().then(ctx.updateData);
                }

                function updateData(data) {
                    ctx.lst = data;
                    return ctx.lst;
                }
            }

            function ctxPage(name,pCtx){
                var ctx=ng.extend( ctxLst(name,pCtx),{
                    refresh: refresh,
                    updateData:updateData,
                    pager: pager,
                    total: 0,
                    params:{filter: ''},
                    filter: {page: 1, perPage: 20}
                });
                return ctx;

                function refresh(filter,params,newParams) {
                    if (filter) ctx.filter = filter;
                    updateParams(ctx,params,newParams);
                    return ctx.res().all(name).all('actpage').post(ctx.filter).then(ctx.updateData);
                }
                function pager(page) {
                    ctx.filter.page = page;
                    refresh();
                }
                function updateData(data) {
                    ctx.lst = data.Items;
                    ctx.total=data.Total;
                    return ctx.lst;
                }
            }

            function ctxObj(name,pCtx, paramId) {
                var pRefresh = pCtx ? pCtx.refresh || ng.noop : ng.noop;
                var ctx = {
                    p: pCtx,
                    name: name,
                    res: res,
                    refresh: refresh,
                    editId: editId,
                    view: view,
                    save: save,
                    saveRefresh: saveRefresh,
                    del: del,
                    updateData: updateData,
                    curId: ''
                };
                return ctx;

                function refresh() {
                    return res().get().then(ctx.updateData);
                }

                function updateData(data) {
                    ctx.obj = data;
                    return ctx.obj;
                }

                function view(id) {
                    ctx.curId = id;
                }

                function editId(id) {
                    view(id);
                    if (id) return refresh();
                    else return res().post().then(ctx.updateData);
                }

                function res() {
                    return pCtx.res().one(name, ctx.curId);
                }

                function save() {
                    return ctx.obj.save().then(pRefresh);
                }

                function saveRefresh() {
                    return save().then(function () {
                        if ($stateParams[paramId] === '') {
                            ctx.curId = $stateParams[paramId] = ctx.obj.Id;
                            $state.go('.', $stateParams);
                        }
                    });
                }

                function del() {
                    return ctx.obj.remove().then(pRefresh);
                }
            }

            function ctxObjSub(name,pCtx) {
                var ctx = {
                    p: pCtx,
                    name: name,
                    add: function () {
                        ctx._obj = ctx.obj = null;
                    },
                    edit: function (obj) {
                        ctx._obj = obj;
                        ctx.obj = ng.copy(obj);
                    },
                    save: save,
                    saveRefresh: save,
                    del: del
                };
                return ctx;

                function save() {
                    if (ctx._obj) {
                        ctx._obj = ng.extend(ctx._obj, ctx.obj);
                    } else {
                        ctx._obj = ng.extend({}, ctx.obj);
                        ctx.p.obj[name].push(ctx._obj);
                    }
                }

                function del() {
                    if (ctx._obj) {
                        ctx.p.obj[name] = _.without(ctx.p.obj[name], ctx._obj);
                    }
                }
            }
        };
    });

})(angular);