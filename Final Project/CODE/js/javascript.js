$(document).ready(function(){

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
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

//END of navbar sequence

//When you click "Done" filter, only show goals that have been completed
$(".doneFilter").click(function(){
  // $("div").filter(".undone").css("display:none;");
    $(".doneFilter").toggleClass("selected");
    $("div.notDone").toggleClass("invisible");
    $("div.done").toggleClass("doneFiltered");
    $("doneFilter").toggleClass("underline");
    });


//When you click "UnDone" filter, only show goals that haven't been completed
$(".undoneFilter").click(function(){
    $(".undoneFilter").toggleClass("selected");
    $("div.done").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    });

//When you click "Learn" filter, only show goals that are pertinent to learning
$(".learnFilter").click(function(){
    $(".learnFilter").toggleClass("selected");
    $("div.travel").toggleClass("invisible");
    $("div.fun").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });

//When you click the Travel filter, only show goals related to traveling

$(".travelFilter").click(function(){
    $(".travelFilter").toggleClass("selected");
    $("div.learn").toggleClass("invisible");
    $("div.fun").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });

//When you click Fun filter, only show goals related to Fun/other category
$(".funFilter").click(function(){
    $(".funFilter").toggleClass("selected");
    $("div.learn").toggleClass("invisible");
    $("div.travel").toggleClass("invisible");
    $("div.notDone").toggleClass("notDoneFiltered");
    $("div.done").toggleClass("doneFiltered");
    });


//When you scroll down the page, raise the parachute until it hits the top of the page

//Once the parachute is at the top of the page, make a circle appear behind it that's a button

//If you click the button, see a full-page bleed About page

$("button.about").click(function(){
        $('.aboutPage').show("scale", "vertical", 10000);
        $('.aboutPage').css("display: block;");
              });
$('#close').click(function () {
        $('.aboutPage').hide();
              });


// });

// });

//Make navigation disappear until you scroll up

//When you click on a goal item

}); //doc ready
