
var login = angular.module('LoginControllerModule',[]);

login.controller('LoginController', function ($scope, $http){
        var url = 'http://localhost:8081//login/';
        var onSuccess = function(response){
            var respIn = response.data;
            if(respIn){
                if(respIn.role){
                    //Admin/member
                    $scope.msg = 'Success ' + respIn.role;
                }else{
                    $scope.msg = 'Success ' + respIn.cnp;
                }
                  
            }else{
                onFailure();
            }
        };

        var onFailure = function(){
            $scope.msg = 'Failure invalid input';    
        };

        $scope.loginWithEmail = function (email, password){
            url = url + email + '/' + password;
            called(url);
            url = 'http://localhost:8081//login/';
        };

        $scope.loginWithCnp = function (cnp){
            url = url + cnp;
            called(url);
            url = 'http://localhost:8081//login/';
        };

        var called = function(url){
               $http.post(url)
                    .then(onSuccess, onFailure);
            
        };
    });