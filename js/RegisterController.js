var register = angular.module('RegisterControllerModule', []);

register.controller('RegisterController', function($scope, $http){

    var pwd = document.getElementById("thePassword");
    var pwdConf = document.getElementById("theConfPassword");

    //works... ish
    function compPasswords(){
        if(pwd.value != pwdConf.value){
            $scope.pwMatch = 'Passwords do not match!';
        }else{
            $scope.pwMatch = undefined;
        }
    }
    pwd.onchange = compPasswords;
    pwdConf.onkeyup = compPasswords;


    var onSuccess = function(){
        $scope.succsessMsg = "Registration complete, you can Log-In now.";
        $scope.failureMsg = undefined;
    }
    var onFailuare = function(){
        $scope.succsessMsg = undefined;
        $scope.failureMsg = "You already have an account, or mandatory fieds have invalid data, or you're not a citizen of Romania";
    }


    var doCallHttp = function(path){
        $http.post(path)
             .then(onSuccess, onFailuare);
    }


    $scope.checkForm = function(cnp, email, password, confpassword, phone){
        var theUrl = 'http://localhost:8081//citizen/makeAccount';
        if(pwd.value == pwdConf.value){
            $scope.pwMatch = undefined;
            theUrl = theUrl + '/' + cnp + '/' + email +
                     '/' + password + '/' + phone;
            doCallHttp(theUrl);
            var theUrl = 'http://localhost:8081//citizen/makeAccount';
        }else{
            $scope.pwMatch = 'Passwords do not match!';
        }
    };

});