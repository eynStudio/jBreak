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