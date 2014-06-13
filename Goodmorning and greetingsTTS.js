//Goodmorning and greetings

//different greetings that can be used
var greetings = new String();
var name = new String();
var timeIntro = new String();
var daughterName = new String();
var busNames = new String();

//now put stuff in those arrays, probably better ways to do this
greetings = ["Good morning", "Top of the morning", "Wake your lazy ass up", "I love the smell of napalm in the monring", "Get on with your day"];

namesForMe = ["sir", "Joshua", "you magnificent bastard", "stud", "rock star"];

timeIntro = ["the time is now", "you are late, it is"];

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
	if(d.getDay() == 1 || d.getDay() == 3 || d.getDay() == 5)
		return 1;
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

/****************************/

morningSpeech = greetings[getRandomNum("5")] + " " + namesForMe[getRandomNum(5)] + " " + timeIntro[getRandomNum("2")] + " " + getCurrentTime(); 
sayShit(morningSpeech);

if(schoolBusDay){
	morningSpeech = daughterName[getRandomNum("4")] + " " + busNames[getRandomNum("3")] + " " + " will be here at 8:30";
	sayShit(morningSpeech);
}