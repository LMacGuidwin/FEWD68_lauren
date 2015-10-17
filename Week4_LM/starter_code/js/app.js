

/*
Call $.val() on inputs to get the string value of your user’s input
Store user input in var city
Use $.on(submit) or $.click to figure out when the user clicks the “submit” button
Create if / else if / else conditionals to control the flow of your application
Write at least six different lines of pseudocode and display them inline as JavaScript comments
Prevent a form submission using the event.preventDefault() function
Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
Get the first element from an attribute name using $.attr()
Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
If a user submits:
“New York” or “New York City” or “NYC” make the background of the page nyc.jpg
“San Francisco” or “SF” or “Bay Area” make the background of the page sf.jpg
“Los Angeles” or “LA” or “LAX” make the background of the page la.jpg
“Austin” or “ATX” make the background of the page austin.jpg
“Sydney” or “SYD” make the background of the page sydney.jpg
BONUS

Remove extra spaces or new lines that users or the browser might add before or after their input
Reset the user input field after it is submitted
*/

 //LM: Get user answer
//Store in variable named "city"

$(document).ready(function() {

//var city = $("#city-type").val();

//run function when user hits submit button
$("#submit-btn").click(picChange) 

function picChange(){

  console.log("Hello, World");

event.preventDefault();

//If the user says their city is NYC, then make background nyc.jpg

var city = $("#city-type").val();
$("#city-type").val("Enter a new city...");
//"#city-type" = "Enter a city name..."

if (city == "New York City" || city == "NYC" || city == "New York" || city == "Manhattan" || city == "Big Apple"){
    $("body").attr("class", "nyc");
}

//Else if the user says their city is SF, then make background sf.jpg

else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
      $("body").attr("class", "sf");
        }
    

//Else if the user says their city is LA, then make background la.jpg
else if (city == "LA" || city == "Los Angeles" || city == "City of Angels") {
      $("body").attr("class", "la");
  }

//Else if the user says their city is Austin, then make background austin.jpg
else if (city == "Austin" || city == "ATX") {
          $("body").attr("class", "austin");
  }


//Else if the user says their city is Sydney, then make background sydney.jpg
else if (city == "Sydney") {
          $("body").attr("class", "sydney");
  };

}

});






