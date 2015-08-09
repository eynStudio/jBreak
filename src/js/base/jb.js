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