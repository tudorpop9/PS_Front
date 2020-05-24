$(document).ready(function()    {
    $("#request_temp").click(function(e)    {
        $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Cluj-Napoca&appid=ea1863083f37f636a3d408f54bc64c79',
            dataType: 'json',
            success: function(data){
                $("#temp").attr("placeholder", (data.main.temp - 273.15));
            },
            error: function(){
                $("#temp").html("error")
            }

        });
    });


});