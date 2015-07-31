angular.module('jb.ui')
    .directive('jbTriStateCheckboxTreeview', function () {
        return {
            restrict: 'ECA',
            link: function (scope, element, attrs) {
                element.on('change', function (e) {
                    var checked = $(e.target).prop("checked"),
                        container = $(e.target).parent(),
                        siblings = container.siblings();

                    container.find('input[type="checkbox"]').prop({
                        indeterminate: false,
                        checked: checked
                    });

                    function checkSiblings(el) {
                        var parent = el.parent().parent(),
                            all = true;

                        el.siblings().each(function () {
                             all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
                            return all;
                        });

                        if (all && checked) {
                            parent.children('input[type="checkbox"]').prop({
                                indeterminate: false,
                                checked: checked
                            });
                            checkSiblings(parent);
                        } else if (all && !checked) {
                            parent.children('input[type="checkbox"]').prop("checked", checked);
                            parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
                            checkSiblings(parent);
                        } else {
                            el.parents("li").children('input[type="checkbox"]').prop({
                                indeterminate: true,
                                checked: false
                            });
                        }
                    }

                    checkSiblings(container);
                });
            }
        };
    });
