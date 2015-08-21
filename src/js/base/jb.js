(function(ng) {

    var module = ng.module('jb',[]),
        uid = 0;

    module.factory('jb$', function () {
        return {
            nextUid:nextUid,
            fmt: fmt,
            arrContains: arrContains,
            arrToggle: arrToggle,
            arrRemove: arrRemove
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

    function arrContains(array, obj) {
        return Array.prototype.indexOf.call(array, obj) != -1;
    }

    function arrToggle(array, obj) {
        if (arrContains(array, obj)) arrRemove(array, obj);
        else array.push(obj);
    }

    function arrRemove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
            array.splice(index, 1);
        }
        return index;
    }

})(angular);