angular.module('jb.ui')
    .directive('draggable', function () {
        return {
            scope: {
                dragType: '=',
                dragVal: '='
            },
            link: function (scope, element) {
                // this gives us the native JS object
                var el = element[0];
                el.draggable = true;
                el.addEventListener(
                    'dragstart',
                    function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('Type', scope.dragType);
                        e.dataTransfer.setData('Val', scope.dragVal);
                        this.classList.add('drag');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragend',
                    function (e) {
                        this.classList.remove('drag');
                        return false;
                    },
                    false
                );
            }
        };
    })
    .directive('droppable', function () {
        return {
            scope: {
                drop: '&',
                dropVal: '='
            },
            link: function (scope, element) {
                // again we need the native object
                var el = element[0];

                el.addEventListener(
                    'dragover',
                    function (e) {
                        e.dataTransfer.dropEffect = 'move';
                        // allows us to drop
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragenter',
                    function (e) {
                        this.classList.add('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'dragleave',
                    function (e) {
                        this.classList.remove('over');
                        return false;
                    },
                    false
                );

                el.addEventListener(
                    'drop',
                    function (e) {
                        // Stops some browsers from redirecting.
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        this.classList.remove('over');
                        var dragVal = e.dataTransfer.getData('Val');
                        // this.appendChild(item);
                        // call the passed drop function
                        scope.$apply(function (scope) {
                            var fn = scope.drop();
                            if ('undefined' !== typeof fn) {
                                fn(dragVal, scope.dropVal);
                            }
                        });
                        return false;
                    },
                    false
                );
            }
        };
    });