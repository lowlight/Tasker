/**
 * FUNCTION DEFS
 */

 //function for making the rest call in javascript
 function restCall() 
{ 
    var request = new XMLHttpRequest(); 
    request.open("GET","http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_320.json?key=TEST&minutesAfter=0&minutesBefore=30",false);
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
* END FUNCTION DEFS
*/

flash("starting script");
setLocal("%busarrivaltime", "!!");//something unique to show the script was run
setLocal("%routenum", "!!");
var busNum = 0;//var to pass the bus number to showMinTillArrival
var rtres = restCall();
//flashLong("rtres = " + rtres);
var json = eval ("(" + rtres + ")");
var timerightnow = 0;
timerightnow = json.currentTime;
if(timerightnow == 0){
	flash("Rest returned no data");
	setLocal("%busarrivaltime", "><");
	setLocal("%routenum", "><");
	exit();//no point in continuing, bailout now
}

//timerightnow = timerightnow / 1000; //convert 2 seconds
//flashLong("length " + json.data.entry.arrivalsAndDepartures.length);


for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	if(554 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime);
		}
	} 	
} //end for

setLocal("%busarrivaltime", "--");//no buses within timeframe set in rest call.
setLocal("%routenum", "--");
