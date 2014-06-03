//say shit from javascript
function sayShit(speechString){
	//get current media volume
	var oldVolume = global('%VOLM');
	//set media volume for TTS voice
	setGlobal('%VOLM', 10);
	var ok = say(speechString, "com.ivona.tts", "eng-GBR", "media", 5, 5);
	//return media volume to previous value
	setGlobal('%VOLM', oldVolume);
	return ok;//true
}


//get current time 
function getCurrentTime(){
	//return the current time in format TTS can use
	var d = new Date();
	var returnString = new String();
	returnString = d.getHours() + ":" + d.getMinutes();
	return returnString;
}

//get JSON data from REST service
function getRestData(url){
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true/false is for synchronos, was using false, switching to true.
    request.send(); 
    //need to check for error here, return code 200 good, others bad.
	return(JSON.parse(request.responseText));
}

//get date and day of week

//countdown to signifigant dates



//get weather
function getCurrentWeather(){
	//return current weather in formath that TTS can use
	var objWeather;
	var returnString = new String();
	var url = "http://api.wunderground.com/api/4aa979bdbd51a31e/conditions/q/WA/Seattle.json";

	objWeather = getRestData(url);
	returnString += objWeather.current_observation.temp_f;
	returnString += " and ";
	returnString += objWeather.current_observation.weather;
	returnString += " with ";
	returnString += objWeather.current_observation.wind_string;
	returnString += " winds ";

	return returnString;
}

//if good weather suggest driving the Mustang
/*function niceWeather(){
	//if the weather is good Mustang driving weather, suggest i take that car.
	//hardcoded for testing
	var objWeatherInfo = getCurrentWeather();
	if(objWeatherInfo.current_observation.temp_f > 65 && objWeatherInfo.current_observation.precip_today_in <= 0.1)
		return 1;
	else
		return 0;
}*/



//do i need to get Az on school bus today
function schoolBusDay(){
	//return true if i need to get her on bus, 
	var d = new Date();
	if(d.getDay() == 1 || d.getDay() == 3 || d.getDay() == 5)
		return 1;
}

//next bus arrival time 
/*function getTime2SchoolBus(){
	//figure out num mins until 0825, then return that value in format TTS can use
	var curTime = new Date();
	var dateString = curTime.getYear() + "/" + curTime.getMonth() + "/" + curTime.getDay() + " 08:25";
	var busTime = new Date(dateString);
	var difference = busTime.getTime() - curTime.getTime();
	var results = Math.round(difference / 60000);
	return results;
}*/

//is it my night to put down Az?
/*function myNight2PutAzDown(){
	//return true if i need to put Az down tonight
	var d = new Date();
	if(d.getDay() == 2 || d.getDay() == 3 || d.getDay() == 4 || d.getDay() == 6)
		return 1;
}*/

//get next calendar appointment
/*function anyAppointmentsToday(){
	//check calendar for appointments, if yes return either:
	//true, or num appointments, or detail(s) of first appointment
	//maybe return object with appointment details so they can be used to build
	//string
	//hardcoded for testing
	return 0;
}*/



//latest torrents on the seed box to complete

//get info from seedbox

//new tv shows, for shows i want to know about

//get FitBit info

//random adjetive for tam (pretty, beautiful, stunning, sexy, etc)

//latest nrop from specific actor/director/etc

//pick me up?

//incoming communiction, text, email, sms, mms, if from certain people say things

//are headphones plugged in

//read news headlines

//get todo list (if i have one)




/**************************************************/


var morningSpeech = new String();


morningSpeech = "Good morning sir, the time is now " + getCurrentTime();
sayShit(morningSpeech);


//morningSpeech = "Currently the weather is " + objWeatherInfo.current_observation.temp_f + "degrees and " + objWeatherInfo.current_observation.weather + " with winds " + objWeatherInfo.current_observation.wind_string;
morningSpeech = "Currently the weather is " + getCurrentWeather();
sayShit(morningSpeech);


if(schoolBusDay){
	morningSpeech = "Oz's bus will be here at 8:25";
	sayShit(morningSpeech);
}
/*
if(anyAppointmentsToday){
	var appointmentDetailWho = "Agent Smith";
	var appointmentDetailWhen = "1:30";
	morningSpeech = "Your first appointment is with " + appointmentDetailWho + " at " + appointmentDetailWhen;
	sayShit(morningSpeech);
}

if(myNight2PutDownAz){
	morningSpeech = "Don't forget it is your night to put Oz down for bed ";
	sayShit(morningSpeech);
}

if(niceWeather){
	morningSpeech = "The weather looks perfect for the Mustang sir";
	sayShit(morningSpeech);
}

sayShit("Have a good day sir.");

*/

