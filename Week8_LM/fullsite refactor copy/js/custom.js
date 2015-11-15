// Put all your lovely jQuery / Javascript goodies right down here.

$(document).ready(function(){

  $(function() {
    $( ".accordionButton" ).accordion();
  });

$('#accordion').find('.accordionButton').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');
      //Hide the other panels
      $(".accordionContent").not($(this).next()).slideUp('fast');

    });
  });
