


// use the array to add values to the<select> menu by using a for loop in
// JavaScript (don't update the HTML to do this!)

//Get document ready before loading jQuery/javascript
$(document).ready(function(){
  // Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD";
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  for( var i = 0; i < cities.length; i++) {
    // • Use $.append() in your iteration on the drop-down menu
    // selecting option tag. adding an option tag, the city, and the closing tag
    $("#city-type").append("<option>" + cities[i] + "</option>")
  }
  //check on when menu changes
  // • Use the $.change event handler to capture user actions
  $("#city-type").change(function(){
  //Act on this event
  var city = $("#city-type").val();

  // • When the user changes the input of the drop-down, update the background
  // image based on what they selected
  //First, check what value equals
  if(city == "NYC"){
    // • Use the $.attr() function to update HTML classes

    $("body").attr("class", "nyc")
    }
        else if(city == "SF"){
          $("body").attr("class", "sf")
        }
        else if(city == "ATX"){
          $("body").attr("class", "austin")
        }
        else if(city == "LA"){
          $("body").attr("class", "la")
        }
        else if(city == "SYD"){
          $("body").attr("class", "sydney")
        }

// • Get the value of user input using $.val()
// • Display your pseudocode as Javascript comments

});
});

