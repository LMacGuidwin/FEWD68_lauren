$(document).ready(function(){

$(".doneFilter").click(function(){

    $("div.notDone").toggleClass("invisible");
    $("div.done").css("background", "rgba(153,255,204,.3)")
      console.log("test")
    });
}); //doc ready
