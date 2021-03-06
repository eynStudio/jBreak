(function() {
    var module = angular.module('jb.ui');

    var btnDefaults = {
        activeClass: 'active',
        toggleEvent: 'click'
    };

    module.directive('jbCheckboxGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="checkbox"]');
                angular.forEach(children, function (child) {
                    var childEl = angular.element(child);
                    childEl.attr('jb-checkbox', '');
                    childEl.attr('ng-model', attr.ngModel + '.' + childEl.attr('value'));
                });
            }

        };

    });

    module.directive('jbCheckbox', function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support label > input[type="checkbox"]
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : true;
                if (constantValueRegExp.test(attr.trueValue)) {
                    trueValue = scope.$eval(attr.trueValue);
                }
                var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : false;
                if (constantValueRegExp.test(attr.falseValue)) {
                    falseValue = scope.$eval(attr.falseValue);
                }

                // Parse exotic values
                var hasExoticValues = typeof trueValue !== 'boolean' || typeof falseValue !== 'boolean';
                if (hasExoticValues) {
                    controller.$parsers.push(function (viewValue) {
                        // console.warn('$parser', element.attr('ng-model'), 'viewValue', viewValue);
                        return viewValue ? trueValue : falseValue;
                    });
                    // modelValue -> $formatters -> viewValue
                    controller.$formatters.push(function (modelValue) {
                        // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                        return angular.equals(modelValue, trueValue);
                    });
                    // Fix rendering for exotic values
                    scope.$watch(attr.ngModel, function (newValue, oldValue) {
                        controller.$render();
                    });
                }

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('ng-model'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, trueValue);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('ng-model'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        if (!isInput) {
                            controller.$setViewValue(!activeElement.hasClass('active'));
                        }
                        if (!hasExoticValues) {
                            controller.$render();
                        }
                    });
                });

            }

        };

    });

    module.directive('jbRadioGroup', function () {

        return {
            restrict: 'A',
            require: 'ngModel',
            compile: function postLink(element, attr) {
                element.attr('data-toggle', 'buttons');
                element.removeAttr('ng-model');
                var children = element[0].querySelectorAll('input[type="radio"]');
                angular.forEach(children, function (child) {
                    angular.element(child).attr('jb-radio', '');
                    angular.element(child).attr('ng-model', attr.ngModel);
                });
            }

        };

    });

    module.directive('jbRadio', function ( $$rAF) {

        var constantValueRegExp = /^(true|false|\d+)$/;

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attr, controller) {

                var options = btnDefaults;

                // Support `label > input[type="radio"]` markup
                var isInput = element[0].nodeName === 'INPUT';
                var activeElement = isInput ? element.parent() : element;

                var value;
                attr.$observe('value', function (v) {
                    value = constantValueRegExp.test(v) ? scope.$eval(v) : v;
                    controller.$render();
                });

                // model -> view
                controller.$render = function () {
                    // console.warn('$render', element.attr('value'), 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue, 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue);
                    var isActive = angular.equals(controller.$modelValue, value);
                    $$rAF(function () {
                        if (isInput) element[0].checked = isActive;
                        activeElement.toggleClass(options.activeClass, isActive);
                    });
                };

                // view -> model
                element.bind(options.toggleEvent, function () {
                    scope.$apply(function () {
                        // console.warn('!click', element.attr('value'), 'controller.$viewValue', typeof controller.$viewValue, controller.$viewValue, 'controller.$modelValue', typeof controller.$modelValue, controller.$modelValue);
                        controller.$setViewValue(value);
                        controller.$render();
                    });
                });

            }

        };


    });

})();