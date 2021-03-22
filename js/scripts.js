$(function(){
    $("#submitButton").mouseover(function(){
        $(this).css("background-color","red");
    });
    $("#submitButton").mouseout(function(){
        $(this).css("background-color","blue");
    });
})
