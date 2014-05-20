/**
 * FUNCTION DEFS
 */

 //function for making the rest call in javascript
 function restCall() 
{ 
    var request = new XMLHttpRequest(); 
    request.open("GET","http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_456.json?key=TEST&minutesAfter=0&minutesBefore=30",false);
    request.send(); 
    return(request.responseText); 
} 


//function to calc the minutes to bus arrival and display value
function showMinTillArrival(timerightnow, busarrivaltime){
	busarrivaltime = busarrivaltime / 1000;
	busarrivaltime = timerightnow - busarrivaltime;
	busarrivaltime = busarrivaltime / 60;
	busarrivaltime = busarrivaltime.toFixed(0);
	setLocal("%busarrivaltime", busarrivaltime);
	flashLong("bus = " + busarrivaltime);
	exit();//i hope this kills the script......
}

/**
* END FUNCTION DEFS
*/

flashLong("starting script");
setLocal("%busarrivaltime", "!!");//something unique to show the script was run
var rtres = restCall();
//flashLong("rtres = " + rtres);
var json = eval ("(" + rtres + ")");
var timerightnow = 0;
timerightnow = json.currentTime;
if(timerightnow == 0){
	flash("Rest returned no data");
	setLocal("%busarrivaltime", "><");
	exit();//no point in continuing, bailout now
}

timerightnow = timerightnow / 1000; //convert 2 seconds
flashLong("length " + json.data.entry.arrivalsAndDepartures.length);


for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	//flashLong(json.data.entry.arrivalsAndDepartures[i].routeShortName);
	if(216 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime);
		}
	} else if(218 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime);
		}
	} else if(219 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime);
		}
	}	
} //end for

setLocal("%busarrivaltime", "--");//no buses within timeframe set in rest call.
