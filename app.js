(function () {
    
    angular.module('MyFirstApp', [])   
    .controller('MyFirstController', function ($scope) {
      $scope.name = "";
      $scope.finalvalue=0;

      $scope.calcval=function(){
        var v=calc($scope.name);
        $scope.finalvalue=v;
      };
    });

    function calc(str_){
        var calc_val=0;
        for(var i=0; i<str_.length; i++){
            calc_val+=str_.charCodeAt(i);
        }
        return calc_val;
    }
    
    })();
