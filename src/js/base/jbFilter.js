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