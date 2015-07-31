(function() {
    var module = angular.module('jb.ui');

    var Ctrl = ['$scope', '$element', '$transclude', function($scope, $element, $transclude){

        var toTransclude;

        $scope.$on('$destroy', function(){
            if(toTransclude){
                toTransclude.remove();
                toTransclude = null;
            }
        });

        this.transclude = function(name, element){
            for(var i = 0; i < toTransclude.length; ++i){
                var el = angular.element(toTransclude[i]);
                if(el.attr('name') === name){
                    element.empty();
                    if(el.attr('jb-transclude-self'))
                        element.append(el);
                    else
                        element.append(el.children());
                    return;
                }
            }
        };

        $transclude(function(clone){
            toTransclude = clone;
        });
    }];
    module.directive('jbTransclude', function(){
        return {
            controller: Ctrl
        };
    });

    module.directive('jbPartial', function(){
        return {
            require: ['^jbTransclude'],
            link: function(scope, element, attrs, ctrls){
                var ctrl = ctrls[0];
                ctrl.transclude(attrs.jbPartial, element);
            }
        };
    });

})();