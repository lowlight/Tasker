//Goodmorning and greetings

//different greetings that can be used
var greetings = new String();
var name = new String();
var timeIntro = new String();
var daughterName = new String();
var busNames = new String();

//now put stuff in those arrays, probably better ways to do this
greetings = ["Good morning", "Morning", "Another beautiful day", "I trust you had a good night", "Oh the places you'll go today"];

namesForMe = [" sir,", " Joshua,", " Master, ", " Stud,", " rock star,"];

timeIntro = [" the time is ", " the time is "];

daughterName = ["Oz's", "Ozzy's", "The princess's", "The gromet's"];

busNames = ["bus", "transport", "yellow submarine"];

//********************************************

//say shit from javascript
function sayShit(speechString){
	//get current media volume
	var oldVolume = global('%VOLM');
	//set media volume for TTS voice
	setGlobal('%VOLM', 11);
	var ok = say(speechString, "com.ivona.tts", "eng-GBR", "media", 5, 5);
	//return media volume to previous value
	setGlobal('%VOLM', oldVolume);
	return 1;
}

//do i need to get Az on school bus today
function schoolBusDay(){
	//return true if i need to get her on bus, 
	var d = new Date();
	//if(d.getDay() == 1 || d.getDay() == 3 || d.getDay() == 5)
	//	return 1;
	return 0;
}

//get current time 
function getCurrentTime(){
	//return the current time in format TTS can use
	var d = new Date();
	var returnString = new String();
	returnString = d.getHours() + ":" + d.getMinutes();
	return returnString;
}

//random number
function getRandomNum(upperLimit){
	return(Math.floor(Math.random() * upperLimit));
}


//Speak the weather for the day
//say shit from javascript
function sayShit(speechString){
	//get current media volume
	var oldVolume = global('%VOLM');
	//set media volume for TTS voice
	setGlobal('%VOLM', 11);
	var ok = say(speechString, "com.ivona.tts", "eng-GBR", "media", 5, 5);
	//return media volume to previous value
	setGlobal('%VOLM', oldVolume);
	return ok;//true
}

//get JSON data from REST service
function getRestData(url){
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true/false is for synchronos, was using false, switching to true.
    request.send(); 
    //need to check for error here, return code 200 good, others bad.
    if(request.status !== 200){
    	//the request failed for whatever reason.
    	return "-1";
    } else {
    	return(JSON.parse(request.responseText));
    }
	
}

//get weather
function getCurrentWeather(){
	//return current weather in formath that TTS can use
	var objWeather;
	var returnString = new String();
	var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/CA/San_Diego.json";
	//var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/WA/Seattle.json";

	objWeather = getRestData(url);
	if(objWeather == "-1"){//should be objWeather.status
		returnString = " not available.";
		return returnString;
	} else {
		returnString += objWeather.current_observation.temp_f;
		returnString += " in ";
		returnString += objWeather.current_observation.display_location.city;
		returnString += ", conditions are, ";
		returnString += objWeather.current_observation.weather;
		returnString += " with ";
		returnString += objWeather.current_observation.relative_humidity;
		returnString += " relative humidity.";
		return returnString;
	}

}


/****************************/

morningSpeech = greetings[getRandomNum("5")] + " " + namesForMe[getRandomNum(5)] + " " + timeIntro[getRandomNum("2")] + " " + getCurrentTime(); 
sayShit(morningSpeech);

//morningSpeech = "Currently the weather is " + objWeatherInfo.current_observation.temp_f + "degrees and " + objWeatherInfo.current_observation.weather + " with winds " + objWeatherInfo.current_observation.wind_string;
morningSpeech = "Presently the weather is " + getCurrentWeather();
sayShit(morningSpeech);

morningSpeech = "I hope you have fun at comic con today.";
sayShit(morningSpeech);

/*
if(schoolBusDay){
	morningSpeech = daughterName[getRandomNum("4")] + " " + busNames[getRandomNum("3")] + " " + " will be here at 8:30";
	sayShit(morningSpeech);
}
*/

