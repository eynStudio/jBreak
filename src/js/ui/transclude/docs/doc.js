angular.module('jbdemo')
    .controller('TranscludeCtrl', function ($scope) {


    })
    .directive('jbTranscludePaneDemo', function(){
        return {
            templateUrl: 'one.tpl.html',
            transclude: true,
            link: function(scope, element, attrs){
                // Some fancy logic.
            }
        };
    });
