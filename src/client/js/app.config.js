(function(){
     angular.module('myApp').config(Config);

     Config.$inject=['$routeProvider'];

     function Config($routeProvider){
         $routeProvider
             .when('/home',{
                 templateUrl:'js/home.html',
                 controller: 'myCtrl',
                 resolve: {
                     serverConfig: function($q, $timeout, $resource){
                         /*
                        var delay = $q.defer();
                        $timeout(function (){
                            delay.resolve({secret: "Secret1"});
                        },1000);
                        return delay.promise;*/
                        var deferred=$q.defer();
                        var res=$resource('/config');
                         res.get(function(data){
                             deferred.resolve(data);
                         }, function(error){
                             deferred.reject(error);
                         })

                         return deferred.promise;
                    }
                }
             })
             .otherwise('/home');

    }
})();