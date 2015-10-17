
//Set temp to some celsius value
var tempC = 20;
//Convert temp to Fahrenheit
var tempF = tempC * 1.8 + 32;

//Set threshold temp in Fahrenheit
var freezing = 32;

//If F is below freezing temp, set background color to gray for body
//If F is above or equal to freezing temp, set background color to yellow


//adds inline styling to HTML doc
if(tempF < freezing){
  document.body.setAttribute("style","background-color:grey");
  document.write(tempF);
} else if(tempF >= freezing){
   document.body.setAttribute("style","background-color:yellow");
  document.write(tempF);
};

document.body.innerHTML=tempF;