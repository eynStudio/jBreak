angular.module('jb.ui')
    .provider('$jbAside', function () {

        var defaults = this.defaults = {
            animation: 'am-fade-and-slide-right',
            type: 'aside',
            placement: null,
            template: 'jb/ui/aside/aside.tpl.html',
            contentTemplate: false,
            container: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };

        this.$get = function ($jbModal) {
            function AsideFactory(config) {
                var $aside = {};
                var options = angular.extend({}, defaults, config);
                $aside = $jbModal(options);
                return $aside;
            }

            return AsideFactory;
        };
    })

    .directive('jbAside', function ($window, $sce, $jbAside) {

        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;

        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) {
                        attr.$observe(key, function (newValue, oldValue) {
                            scope[key] = $sce.trustAsHtml(newValue);
                        });
                    }
                });

                // Support scope as an object
              if(  attr.jbAside ) {
                  scope.$watch(attr.jbAside, function (newValue, oldValue) {
                      if (angular.isObject(newValue)) {
                          angular.extend(scope, newValue);
                      } else {
                          scope.content = newValue;
                      }
                  }, true);
              }
                // Initialize aside
                var aside = $jbAside(options);

                // Trigger
                element.on(attr.trigger || 'click', aside.toggle);

                // Garbage collection
                scope.$on('$destroy', function () {
                    if (aside) aside.destroy();
                    options = null;
                    aside = null;
                });

            }
        };

    });