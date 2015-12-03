$(document).ready(function(){


//QUESTIONS FOR ELAINE
// 4) About page div scroll instead of the background? (Mostly worried about mobile) 

///NAV BAR HIDE/SHOW, note copied from JSFiddle
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
        $('#circle').removeClass('circleUp').addClass('circleDown');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
            $('#circle').removeClass('circleDown').addClass('circleUp');
        }
    }
    
    lastScrollTop = st;
}

//END of navbar sequence

//Parachute offset
//when user scrolls down
//move parachute up

// $(window).scroll(function () {
//          $("img#parachute").offset({ left = 0, top = -5);

// // var initialTop = 0;
// // var initialWidth = 20%;
// // var finalWidth = 10%;
// // var finalTop = 0;

//   $("#parachute").hasScrolled(function(){
//         newPos = new Object();
//         newPos.left = "0";
//         newPos.top = "20";
//         $("#parachute").offset(newPos);
//     });


//END of parachute offset



//When you click "Done" filter, only show goals that have been completed

//ATTEMPTED if else statement
// $(".doneFilter").click(function(){

//     //check if To Do goals are already filtered to show.
//             if ($('div.notDone').hasClass('notDoneFiltered')){
//     //If so, remove filtered appearance and hide them
//                 ($('div.notDone').removeClass('notDoneFiltered').addClass('invisible'); 
                
//             } 
//     //if they aren't selected
//             else {

//                 $("div.notDone").addClass("invisible");
//               }

//     //check if Done goals have invisible class.          
//              if ($('div.done').hasClass('invisible') {

//     //If so, remove invisible class and add class "doneFiltered" to them
//             ($('div.done').removeClass('invisible').addClass('doneFiltered'); 
//     //else toggle class "doneFiltered" to them
//             else {
//                 $("div.done").toggleClass("doneFiltered");
//             }
//             }



// //WORKING CODE!
// $(".doneFilter").click(function(){
//     $("div.notDone").toggleClass("invisible");
//     $(".doneFilter").toggleClass("underline");
//     $("div.done").toggleClass("doneFiltered");
//     });


//if (".undoneFilter")


//When you click "UnDone" filter, only show goals that haven't been completed
$(".undoneFilter").click(function(){
    $(".undoneFilter").toggleClass("underline");
    $("div.done").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    });

//When you click "Learn" filter, only show goals that are pertinent to learning
$(".learnFilter").click(function(){
    $(".learnFilter").toggleClass("underline");
    $("div.travel").toggleClass("invisible");
    $("div.fun").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });

//When you click the Travel filter, only show goals related to traveling

$(".travelFilter").click(function(){
    $(".travelFilter").toggleClass("underline");
    $("div.learn").toggleClass("invisible");
    $("div.fun").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });

//When you click Fun filter, only show goals related to Fun/other category
$(".funFilter").click(function(){
    $(".funFilter").toggleClass("underline");
    $("div.learn").toggleClass("invisible");
    $("div.travel").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });


//When you scroll down the page, raise the parachute until it hits the top of the page

//Once the parachute is at the top of the page, make a circle appear behind it that's a button

//If you click the button, see a full-page bleed About page

$("button.about").click(function(){
        // $('.aboutPage').show("scale", "vertical", 10000);
        $('.aboutPage').addClass("reveal");
              });
$('#close').click(function () {
        $('.aboutPage').removeClass("reveal");
        // $('.aboutPage').css("display: none;");
              });

//     ATTEMPT 2
$(".doneFilter").click(function(){                           //Click DONE button
    $(".doneFilter").toggleClass("underline");               //toggle underline to show if filter is selected
if($('.doneFilter').hasClass('underline')){                   //check if the Done filter is ON (underlined)
   $("div.done").addClass("doneFiltered"); 
   if ($('div.notDone').hasClass('notDoneFiltered')){    //if it's ON, check if Undone items are filtered bg
   ($('div.notDone').removeClass('notDoneFiltered').addClass('invisible')); 
   }  //if so, remove filter appearance and hide them
   else {
                $("div.notDone").addClass("invisible");
              }  
   }                                          //if not, just hide them
else{                                                          //if it's OFF
$("div.notDone").removeClass("invisible");                      //show Undone items   
$("div.done").removeClass("doneFiltered");                   
           }                                        
});


// });

// });

//Make navigation disappear until you scroll up

//When you click on a goal item

}); //doc ready
