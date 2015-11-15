$(document).ready(function(){

$(".doneFilter").click(function(){

    $("div.notDone").toggleClass("invisible");
    $("div.done").toggleClass("doneFiltered");
    $("doneFilter").toggleClass("underline");
    });

$(".undoneFilter").click(function(){

    $("div.done").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    });
}); //doc ready
