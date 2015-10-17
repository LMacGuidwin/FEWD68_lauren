

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
var city = $("input:submit").val("");

//run function when user hits submit button
$("#submit-btn").on("picChange") 

function(picChange){

//If the user says their city is NYC, then make background nyc.jpg
  if (city == "New York City" || city =="NYC" || city == "New York" || city == "Manhattan" || city == "Big Apple"){
     function NYC(){
    $("body").attr("background", "url(../images/nyc.jpg)");
  }

  $("#submit-btn").click(NYC);
} 


//Else if the user says their city is SF, then make background sf.jpg
else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
      function SF(){
          $("body").css("background", "../images/sf.jpg");
        }
          $("#submit-btn").click(SF);
  };
    

//Else if the user says their city is LA, then make background la.jpg
  else if (city == "LA" || city == "Los Angeles" || city == "City of Angels") {
      function LA(){
          $("body").css("background", "../images/la.jpg");
        }
          $("#submit-btn").click(LA);
  };

//Else if the user says their city is Austin, then make background austin.jpg
  else if (city == "Austin" || city == "ATX") {
    function austin(){
          $("body").css("background", "../images/austin.jpg");
        }
          $("#submit-btn").click(austin);

  };


//Else if the user says their city is Sydney, then make background sydney.jpg
  else if (city == "Sydney") {
    function sydney(){
          $("body").css("background", "../images/sydney.jpg");
        }
          $("#submit-btn").click(sydney);

  };


)}
