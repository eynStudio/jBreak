angular.module('jb.ui')
    .provider('$jbAlert', function () {
        var defaults = this.defaults = {
            animation: 'am-fade',
            prefixClass: 'alert',
            prefixEvent: 'alert',
            placement: null,
            template: 'jb/ui/alert/alert.tpl.html',
            container: false,
            element: null,
            backdrop: false,
            keyboard: true,
            show: true,
            // Specific options
            duration: false,
            type: false,
            dismissable: true
        };

        this.$get = function ($timeout, $jbModal) {
            function AlertFactory(config) {
                var $alert = {};
                var options = angular.extend({}, defaults, config);
                $alert = $jbModal(options);

                // Support scope as string options [/*title, content, */ type, dismissable]
                $alert.$scope.dismissable = !!options.dismissable;
                if (options.type) {
                    $alert.$scope.type = options.type;
                }

                // Support auto-close duration
                var show = $alert.show;
                if (options.duration) {
                    $alert.show = function () {
                        show();
                        $timeout(function () {
                            $alert.hide();
                        }, options.duration * 1000);
                    };
                }
                return $alert;
            }

            return AlertFactory;
        };
    })

    .directive('jbAlert', function ($window, $sce, $jbAlert) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                angular.forEach(['title', 'content', 'type'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });
                if (attr.jbAlert)
                    scope.$watch(attr.jbAlert, function (newValue, oldValue) {
                        if (angular.isObject(newValue)) {
                            angular.extend(scope, newValue);
                        } else {
                            scope.content = newValue;
                        }
                    }, true);

                var alert = $jbAlert(options);

                element.on(attr.trigger || 'click', alert.toggle);
                scope.$on('$destroy', function () {
                    if (alert) alert.destroy();
                    options = null;
                    alert = null;
                });
            }
        };

    });