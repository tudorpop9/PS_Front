var personAdder = angular.module('AddPersonControllerModule', []);

personAdder.controller('AddPersonController', function($scope, $http){

    var onSuccess = function(){
        $scope.succsessMsg = "Succsess : New person added";
        $scope.failureMsg = undefined;
    }
    var onFailure = function(){
        $scope.succsessMsg = undefined;
        $scope.failureMsg = "Invalid fied value, or person already exists";
    }

    var dbCall = function(theUrl, data){
        $http.post(theUrl, data)
             .then(onSuccess, onFailure);
    }

    $scope.checkForm = function(cnp, lname, fname, birthdate, address){
        var bdate = birthdate.getTime();
        var theUrl = 'http://localhost:8081/addPerson';
        var data = {
            cnp : cnp,
            lastName : lname,
            firstName : fname,
            birthDate : bdate,
            address : address
        }
        dbCall(theUrl, data);
    }

});