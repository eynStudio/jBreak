angular.module('jb.ui')
    .provider('$jbPop', function () {

        var defaults = this.defaults = {
            animation: 'am-fade',
            customClass: '',
            container: false,
            target: false,
            placement: 'right',
            template: 'jb/ui/popover/popover.tpl.html',
            contentTemplate: false,
            trigger: 'click',
            keyboard: true,
            html: true,
            title: '',
            content: '',
            delay: 0,
            autoClose: false
        };

        this.$get = function ($jbTip) {

            function PopoverFactory(element, config) {

                // Common vars
                var options = angular.extend({}, defaults, config);

                var $popover = $jbTip(element, options);

                // Support scope as string options [/*title, */content]
                if (options.content) {
                    $popover.$scope.content = options.content;
                }

                return $popover;

            }

            return PopoverFactory;

        };

    })

    .directive('jbPop', function ($window, $sce, $jbPop) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr) {

                // Directive options
                var options = {scope: scope};
                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                            if (angular.isDefined(oldValue)) {
                                requestAnimationFrame(function () {
                                    if (popover) popover.$applyPlacement();
                                });
                            }
                        });
                    }
                });

                // Support scope as an object
               if( attr.jbPop ) {
                   scope.$watch(attr.jbPop, function (newValue, oldValue) {

                       if (angular.isObject(newValue)) {
                           angular.extend(scope, newValue);
                       } else {
                           scope.content = newValue;
                       }
                       if (angular.isDefined(oldValue)) {
                           requestAnimationFrame(function () {
                               if (popover) popover.$applyPlacement();
                           });
                       }
                   }, true);
               }
                // Visibility binding support
               if( attr.bsShow) {
                   scope.$watch(attr.bsShow, function (newValue, oldValue) {
                       if (!popover || !angular.isDefined(newValue)) return;
                       if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
                       if( newValue === true ) popover.show() ;
                       else popover.hide();
                   });
               }
                // Initialize popover
                var popover = $jbPop(element, options);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (popover) popover.destroy();
                    options = null;
                    popover = null;
                });

            }
        };

    });