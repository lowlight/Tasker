//Goodmorning and greetings


//do i need to get Az on school bus today
function schoolDay(){
	//return true if i need to get her on bus, 
	var d = new Date();
	if(d.getDay() == "1" || d.getDay() == "3" || d.getDay() == "5") {
		return 1;
	} else {
		return 0;
	}
}

//used to remind me what days are PE days
function peDay(){
	var d = new Date();
	if(d.getDay() == "1" || d.getDay() == "3"){
		return 1;
	} else {
		return 0;
	}
}

//get current time 
function getCurrentTime(){
	//return the current time in format TTS can use
	var d = new Date();
	var returnString = new String();
	returnString = " It is now, ";
	returnString += d.getHours() + " " + d.getMinutes();
	returnString += ". ";
	return returnString;
}


//Speak the weather for the day
//say shit from javascript
function sayShit(speechString){
	//get current media volume
	var oldVolume = global('%VOLM');
	//set media volume for TTS voice
	setGlobal('%VOLM', 14);

	say(speechString, "com.ivona.tts", "eng-GBR", "media", 5, 6);
	
	setGlobal('%VOLM', oldVolume);
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
    	//flash("get fail");
    	return "-1";
    } else {
    	//flash("return json");
    	return(JSON.parse(request.responseText));
    }
	
}

//get weather
function getCurrentWeather(){
	//return current weather in formath that TTS can use
	var objWeather;
	var returnString = new String();
	//var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/CA/San_Diego.json";
	var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/WA/Seattle.json";

	objWeather = getRestData(url);
	if(objWeather == "-1"){//should be objWeather.status
		returnString = " Current weather conditions are unavailable.";
		return returnString;
	} else {
		returnString = " The current weather in ";
		returnString += objWeather.current_observation.display_location.city;
		returnString += " ,  is ";
		returnString += objWeather.current_observation.weather;
		returnString += " with a temperature of "
		returnString += objWeather.current_observation.temp_f;
		returnString += ", and ";
		returnString += objWeather.current_observation.relative_humidity;
		returnString += " relative humidity.";
		return returnString;
	}

}

//news stories
function getNewsStories(){
	//return headlines from latest news stories

	var returnString = new String();
	var objNews;
	var url = "http://www.reddit.com/r/news/hot.json";

	objNews = getRestData(url);
	if(objNews == "-1"){
		returnString = " I was unable to fetch the latest headlines for you sir.";
		return returnString;
	} else {
		returnString = "In the headlines right now sir are, ";
		returnString += objNews.data.children[0].data.title;
		returnString += " , and,  ";
		returnString += objNews.data.children[1].data.title;
		returnString += " , finally, ";
		returnString += objNews.data.children[2].data.title;

		return returnString;
	}
}

//seattle 911 calls
function seattle911Calls(){
	var returnString = new String();
	var obj911Calls;
	var url = "https://data.seattle.gov/resource/3k2p-39jp.json?$limit=5&$offset=0";

	obj911Calls = getRestData(url);
	if(obj911Calls == "-1"){
		returnString = " I was unable to fetch the latest 911 calls for you sir.";
		return returnString;
	} else {
		returnString = "Seattle Police are currently responding to, ";
		for(i = 0; i < 5; i++){
			returnString += obj911Calls[i].event_clearance_description;
			returnString += " , ";
		}
		return returnString;
	}
}


/****************************/

morningSpeech = " Good morning sir.  I hope you slept well. ";

morningSpeech += getCurrentTime();

morningSpeech += getCurrentWeather();

morningSpeech += getNewsStories();

//morningSpeech += seattle911Calls();

if(schoolDay) {
	morningSpeech += " Don't forget to get Oz on the bus. ";
}

//if(peDay)
	//morningSpeech += " Today is a P E day for Oz, be sure she is wearing the correct shoes.";

morningSpeech += " Have a delightful day sir.";
sayShit(morningSpeech);

