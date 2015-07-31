angular.module('jb.ui')
    .provider('$jbModal', function () {
        var defaults = this.defaults = {
            //animation: 'am-fade',
            //backdropAnimation: 'am-fade',
            type: 'modal',
            size: null,
            placement: 'center',
            template: 'jb/ui/modal/modal.tpl.html',
            contentTemplate: false,
            element: null,
            backdrop: true,
            keyboard: true,
            html: true,
            show: true
        };
        this.$get = function ($window, $rootScope, $sce, $compile, $templateCache, $animate) {
            var trim = String.prototype.trim;
            var bodyElement = angular.element($window.document.body);
            var htmlReplaceRegExp = /ng-bind="/ig;

            function ModalFactory(config) {
                var $modal = {};
                var modalElement, backdropElement;
                var options = $modal.$options = angular.extend({}, defaults, config);
                var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();

                angular.forEach(['title', 'content'], function (key) {
                    if (options[key]) scope[key] = $sce.trustAsHtml(options[key]);
                });

                // Provide scope helpers
                scope.$hide = function () {
                    scope.$$postDigest(function () {
                        $modal.hide();
                    });
                };
                scope.$show = function () {
                    scope.$$postDigest(function () {
                        $modal.show();
                    });
                };
                scope.$toggle = function () {
                    scope.$$postDigest(function () {
                        $modal.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $modal.$isShown = scope.$isShown = false;
                $modal.$size = scope.$size=options.size;
                $modal.$placement = scope.$placement = options.placement;


                $modal.init = function () {
                    if (options.show) {
                        scope.$$postDigest(function () {
                            $modal.show();
                        });
                    }
                };
                $modal.destroy = function () {
                    if (modalElement) {
                        modalElement.remove();
                        modalElement = null;
                    }
                    scope.$destroy();
                };
                $modal.show = function () {
                    if ($modal.$isShown) return;

                    var parent, after;
                    parent = bodyElement;
                    after = parent[0].lastChild ? angular.element(parent[0].lastChild) : null;

                    modalElement = $modal.$element = modalLinker(scope, function (clonedElement, scope) {
                    });
                    modalElement.css({display: 'block'});
                    $animate.enter(modalElement, parent, after);

                    $modal.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    bodyElement.addClass('modal-open');

                    var el = modalElement[0];
                    el.focus();

                    if (options.backdrop) {
                        backdropElement = angular.element(modalElement.children()[0]);
                        modalElement.on('click', hideOnBackdropClick);
                        backdropElement.on('click', hideOnBackdropClick);
                        backdropElement.on('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.on('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.hide = function () {
                    if (!$modal.$isShown) return;

                    var promise = $animate.leave(modalElement, leaveAnimateCallback);
                    // Support v1.3+ $animate
                    // https://github.com/angular/angular.js/commit/bf0f5502b1bbfddc5cdd2f138efd9188b8c652a9
                    if (promise && promise.then) promise.then(leaveAnimateCallback);

                    $modal.$isShown = scope.$isShown = false;
                    safeDigest(scope);

                    // Unbind events
                    if (options.backdrop) {
                        modalElement.off('click', hideOnBackdropClick);
                        backdropElement.off('click', hideOnBackdropClick);
                        backdropElement.off('wheel', preventEventDefault);
                    }
                    if (options.keyboard) {
                        modalElement.off('keyup', $modal.$onKeyUp);
                    }
                };
                $modal.toggle = function () {
                    if ($modal.$isShown) {
                        $modal.hide();
                    } else {
                        $modal.show();
                    }
                };

                $modal.focus = function () {
                    modalElement[0].focus();
                };

                $modal.$onKeyUp = function (evt) {
                    if (evt.which === 27 && $modal.$isShown) {
                        $modal.hide();
                        evt.stopPropagation();
                    }
                };


                var template = $templateCache.get(options.template);
                if (options.html) template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
                template = trim.apply(template);


                var modalLinker = $compile(template);
                $modal.init();

                function hideOnBackdropClick(evt) {
                    if (evt.target !== evt.currentTarget) return;
                   if(  options.backdrop === 'static' ) $modal.focus() ;
                    else $modal.hide();
                }

                function leaveAnimateCallback() {
                    scope.$emit(options.type + '.hide', $modal);
                    bodyElement.removeClass('modal-open');
                    if (options.animation) {
                        bodyElement.removeClass(options.type + '-with-' + options.animation);
                    }
                }

                return $modal;
            }

            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }

            function safeDigest(scope) {
               var tmp= scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
            }

            function preventEventDefault(evt) {
                evt.preventDefault();
            }

            return ModalFactory;
        };

    })
    .directive('jbModal', function ($window, $sce, $jbModal) {
        return {
            restrict: 'EAC',
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {

                // Directive options
                var options = {scope: scope, element: element, show: false};
                angular.forEach(['template', 'contentTemplate', 'placement', 'size', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'id'], function (key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });

                // Support scope as data-attrs
                angular.forEach(['title', 'content'], function (key) {
                    if (attr[key]) attr.$observe(key, function (newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue);
                    });
                });

                // Support scope as an object
                if (attr.jbModal) scope.$watch(attr.jbModal, function (newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.content = newValue;
                    }
                }, true);

                var modal = $jbModal(options);

                element.on(attr.trigger || 'click', modal.toggle);

                scope.$on('$destroy', function () {
                    if (modal) modal.destroy();
                    options = null;
                    modal = null;
                });
            }
        };
    });

