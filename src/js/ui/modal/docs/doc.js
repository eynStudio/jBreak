angular.module('jbdemo')
    .controller('ModalCtrl',function ($scope,$sce, $jbModal) {

        $scope.modal= {
            title: 'My Title2',
            content: "Hello Modal<br />This is a multiline message!",
            selectSrc:[
                {key:'aa',value:'aaaaaaaaaaaaaa'},
                {key:'bb',value:'bbbbbbbbbbbbbb'},
                {key:'cc',value:'cccccccccccccc'}
            ]

        };

        $scope.showModal = function() {
            var myModal = $jbModal({title: 'My Title', content: "Hello Modal<br />This is a multiline message!", show: true});
        };
    });