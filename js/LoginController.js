
var login = angular.module('LoginControllerModule',[]);

login.controller('LoginController', function ($scope, $http, $window){
        var url = 'http://localhost:8081//login/';
        var onSuccess = function(response){
            var respIn = response.data;
            if(respIn){
                if(respIn.role){
                    //Admin/member
                    if(respIn.role == 'ADMIN'){
                        $window.location.href = "adminIndex.html";
                    }else if(respIn.role == 'MEMBER'){
                        $window.location.href = "memberIndex.html";
                    }else{
                        $window.location.href = "citizenIndex.html";
                    }
                }else{
                    $window.location.href = "citizenIndex.html";
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