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
	var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/CA/SanDiego.json";
	//var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/WA/Seattle.json";

	objWeather = getRestData(url);
	if(objWeather !== 200){//should be objWeather.status
		returnString = " not available.";
		return returnString;
	} else {
		returnString += objWeather.current_observation.temp_f;
		returnString += " and ";
		returnString += objWeather.current_observation.weather;
		returnString += " with ";
		return returnString;
	}

}

//morningSpeech = "Currently the weather is " + objWeatherInfo.current_observation.temp_f + "degrees and " + objWeatherInfo.current_observation.weather + " with winds " + objWeatherInfo.current_observation.wind_string;
morningSpeech = "Currently the weather is " + getCurrentWeather();
sayShit(morningSpeech);