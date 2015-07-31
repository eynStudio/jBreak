(function() {

    var module = angular.module('jb',[]),
        uid = 0;

    module.service('$jb', function () {
        this.nextUid=nextUid;
        this.fmt=fmt;
    });



    function fmt() {
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = arguments[0];

        // start with the second argument (i = 1)
        for (var i = 1; i < arguments.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, arguments[i]);
        }

        return theString;
    }

    function nextUid() {
        return '_' + (++uid);

        function _nextUid() {
            return ++uid;
        }

    }
})();