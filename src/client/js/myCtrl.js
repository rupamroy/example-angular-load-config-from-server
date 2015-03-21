(function(){
     angular.module('myApp')
         .controller('myCtrl', MyCtrl);

     MyCtrl.$inject=['$scope', 'serverConfig'];

     function MyCtrl($scope,serverConfig){
        $scope.content="This is a test content";
        $scope.message=serverConfig.secret;
     }
})();