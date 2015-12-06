$(document).ready(function(){ 


//ALERTS/goal descriptions
// $(".dialog").before("<div class='dialogBlack'></div>");

// $(".dialog").prepend('<div id="close">☒</div>');

// $(goalbox).click(function(){
//   this.alert("this is some text");

// })

$(".dialogMe").click(function() {
  dialogMe();
});

function dialogMe() {
  $(".dialog").css("display", "block");
  $(".dialogBlack").css("opacity", "0.5");
  $(".dialogBlack").css("z-index", "250");
  $(".dialog p, .dialog h2").css("opacity", "1");
  $("#close").css("opacity", "1");
  $("#okButton").css("opacity", "1");
  $(".dialog").css("height", "185px");
  $(".dialog").css("width", "300px");
  $(".dialog").css("padding", "15px");
  $(".dialog").css("margin-left", "-174.5px");
  setTimeout(function() {
    $(".dialog").css("opacity", "1");
  }, 400);
}

$(".dialog #close, .dialog #okButton, .dialogBlack").click(function() {
  $(".dialog p, .dialog h2").css("opacity", "0");
  $(".dialogBlack").css("opacity", "0");
  $(".dialogBlack").css("z-index", "-5");
  $("#close").css("opacity", "0");
  $("#okButton").css("opacity", "0");
  $(".dialog").css("height", "0px");
  $(".dialog").css("width", "0px");
  $(".dialog").css("margin-left", "174.5px");
  $(".dialog").css("padding", "0px");
  setTimeout(function() {
    $(".dialog").css("opacity", "0");
  }, 400);
});

dialogMe();

//ALERT END


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



//About Button

$("button.about").click(function(){
        // $('.aboutPage').show("scale", "vertical", 10000);
        $('.aboutPage').addClass("reveal");
              });
$('#xclose').click(function () {
        $('.aboutPage').removeClass("reveal");
        // $('.aboutPage').css("display: none;");
              });




//LEARN FILTER attempt 2

$(".learnFilter").click(function(){                     //Click Learn
    $(".learnFilter").toggleClass("underline");         //Toggle underline beneath Learn

        if($('.learnFilter').hasClass("underline")){       //If underline is ON
            $('div.travel').addClass("invisible");          //hide travel goals
            $('div.fun').addClass("invisible");             //hide fun goals
            $('.learn.done').addClass('doneFiltered');     //show learned, done items
            $('.learn.notDone').addClass('notDoneFiltered');   //show learned, To Do items
            }

        else{                                           //Else underline is OFF
            $('.travel').removeClass('invisible');      //show travel as normal
            $('.fun').removeClass('invisible');         //show fun as normal
            $('.learn').removeClass('doneFiltered');    //remove doneFiltered and remove undoneFiltered from goalBoxes
            $('.learn').removeClass('notDoneFiltered');
        }
       });
    



//TRAVEL FILTER    
$(".travelFilter").click(function(){                     //Click Travel
    $(".travelFilter").toggleClass("underline");         //Toggle underline beneath Travel

        if($('.travelFilter').hasClass("underline")){       //If underline is ON
            $('div.learn').addClass("invisible");          //hide learn goals
            $('div.fun').addClass("invisible");             //hide fun goals
            $('.travel.done').addClass('doneFiltered');     //show travel, done items
            $('.travel.notDone').addClass('notDoneFiltered');   //show travel, To Do items
            }

        else{                                           //Else underline is OFF
            $('.learn').removeClass('invisible');      //show learn as normal
            $('.fun').removeClass('invisible');         //show fun as normal
            $('.travel').removeClass('doneFiltered');    //remove dark bg from goal boxes
            $('.travel').removeClass('notDoneFiltered');
        }
       });
   



//FUN filter

$(".funFilter").click(function(){                     //Click Fun
    $(".funFilter").toggleClass("underline");         //Toggle underline beneath Fun 

        if($('.funFilter').hasClass("underline")){       //If underline is ON
            $('div.learn').addClass("invisible");          //hide learn goals
            $('div.travel').addClass("invisible");             //hide travel goals
            $('.fun.done').addClass('doneFiltered');     //show learned, done items
            $('.fun.notDone').addClass('notDoneFiltered');   //show learned, To Do items
            }

        else{                                           //Else underline is OFF
            $('.learn').removeClass('invisible');      //show  Learn & travel as normal
            $('.travel').removeClass('invisible');        
            $('.fun').removeClass('doneFiltered');    //remove dark bg from boxes
            $('.fun').removeClass('notDoneFiltered');
        }
       });
    


//DONE FILTER

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




// TO DO FILTER

$(".undoneFilter").click(function(){                           //Click To Do button
    $(".undoneFilter").toggleClass("underline");               //toggle underline to show if filter is selected

        if($('.undoneFilter').hasClass('underline')){                   //check if the To Do filter is ON (underlined)
           $("div.notDone").addClass("notDoneFiltered");                //if so, make the background look darker & change text color on TO DO items

           if ($('div.done').hasClass('doneFiltered')){    //if it's ON, check if Done items are filtered bg
           ($('div.done').removeClass('doneFiltered').addClass('invisible')); 
                   }  //if so, remove filter appearance and hide them
                    else {
                            $("div.done").addClass("invisible");
                                }  
                                    }                                          //if not, just hide them
        else{                                                          //if it's OFF
            $("div.done").removeClass("invisible");                      //show done items as normal bg
            $("div.notDone").removeClass("notDoneFiltered");                //show undone items as normal bg
                   }                                        
});


//Alerts for each


 
// });

// });

//Make navigation disappear until you scroll up

//When you click on a goal item

}); //doc ready


//EXTRA CODE
// //WORKING CODE!
// $(".doneFilter").click(function(){
//     $("div.notDone").toggleClass("invisible");
//     $(".doneFilter").toggleClass("underline");
//     $("div.done").toggleClass("doneFiltered");
//     });
//if (".undoneFilter")
// //When you click "UnDone" filter, only show goals that haven't been completed
// $(".undoneFilter").click(function(){
//     $(".undoneFilter").toggleClass("underline");
//     $("div.done").toggleClass("invisible");
//     $("div.notDone").toggleClass("notDoneFiltered");
//     });
