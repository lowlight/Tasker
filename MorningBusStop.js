/**
*
* FUNCTION DEFS
*
*/

 //function for making the rest call in javascript
 function restCall() 
{ 
    var request = new XMLHttpRequest(); 
    request.open("GET","http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_64561.json?key=TEST&minutesAfter=0&minutesBefore=30",false);
    request.send(); 
    return(request.responseText); 
} 


//function to calc the minutes to bus arrival and display value
function showMinTillArrival(timerightnow, busarrivaltime, busNum){
	busarrivaltime -= timerightnow;
	busarrivaltime /= 1000;
	busarrivaltime /= 60;
	busarrivaltime = busarrivaltime.toFixed(0);
	setLocal("%busarrivaltime", busarrivaltime);
	setLocal("%routenum", busNum);
	flash(busNum + " arrives in " + busarrivaltime + " min");
	exit();//i hope this kills the script......
}

/**
* 
* start main chunk of code
* 
*/

flash("getting bus times");
setLocal("%busarrivaltime", "!!");//something unique to show the script was run
setLocal("%routenum", "!!");
var busNum = 0;//var to pass the bus number to showMinTillArrival
var rtres = restCall();
//check here if return code is bad?
var json = eval ("(" + rtres + ")");

var timerightnow = 0;
timerightnow = json.currentTime;
if(timerightnow == 0){
	flashLong("NO REST DATA!");
	setLocal("%busarrivaltime", "><");
	setLocal("%routenum", "><");
	exit();//no point in continuing, bailout now
}
//timerightnow /= 1000; //convert 2 seconds

//flash("length " + json.data.entry.arrivalsAndDepartures.length);

for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	if(216 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 216);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 216);
		}
	} else if(218 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 218);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 218);
		}
	} else if(219 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 219);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 219);
		}
	}	
} //end for

setLocal("%busarrivaltime", "--");//no buses within timeframe set in rest call.
setLocal("%routenum", "--");
