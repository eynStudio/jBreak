angular.module('jbdemo')
    .controller('AsideCtrl',function ($scope,$sce, $jbAside) {

        $scope.modal={title: 'My Title2',  content: "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />" +
        "Hello Modal<br />This is a multiline message!Hello Modal<br />"};

        $scope.showModal = function() {
            var myModal = $jbAside({title: 'My Title', content: "Hello Modal<br />This is a multiline message!", show: true});
        };
    });