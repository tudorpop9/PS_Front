
var partyAdder = angular.module('AddPartyControllerModule', []);

partyAdder.controller('AddPartyController', function($scope, $http){
   // var founder

    var onSuccess = function(){
        $scope.succsessMsg = "Succsess : New political party added";
        $scope.failureMsg = undefined;
    }

    var onFailure = function(){
        $scope.succsessMsg = undefined;
        $scope.failureMsg = "Invalid fied value, or party already exists";
    }

    var founderCheck = function(partyPrototype){
        var URL = 'http://localhost:8081//getPerson/' + partyPrototype.founderCnp;
        return $http.get(URL);
    }

    $scope.checkForm = function(acronym, fullName, description, founderCnp){
        var partyPrototype ={
            acronym,
            fullName,
            description,
            founderCnp
        }
        var personPromise = founderCheck(partyPrototype);
        personPromise.then(
            function succCheck(response){
                var theUrl = 'http://localhost:8081//admin/party/addParty';
                var data = {
                    acronym : acronym,
                    fullName : fullName,
                    description : description,
                    members : []
                }
                $http.post(theUrl, data)
                     .then(function succParty(response){
                                 var URL = 'http://localhost:8081//admin/party/addPerson/' + acronym + '/' + founderCnp;
                                 $http.post(URL)
                                      .then(onSuccess, onFailure);
                     }, onFailure);
            }, onFailure);
    }

});
