/**
 * 
 */

if(rtcode != 200 || !rtres){ //check error code and that there is data being returned
	flash("GET error " + rtcode);
	setLocal("%busarrivaltime", "><");
	exit();
}

var json = eval ("(" + rtres + ")");
var timerightnow = 0;
timerightnow = json.currentTime;
if(timerightnow == 0){
	flash("Rest returned no data");
	setLocal("%busarrivaltime", "><");
	exit();//no point in continuing, bailout now
}

timerightnow = timerightnow / 1000; //convert 2 seconds
//flash("length " + json.data.entry.arrivalsAndDepartures.length);
busarrivaltime = "00";

for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	switch(json.data.entry.arrivalsAndDepartures[i].routeShortName) {
	case 216:
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	case 218:
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	case 219:
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	default:
		//do nothing
	} //end switch

	if(busarrivaltime != "00"){
		busarrivaltime = busarrivaltime / 1000;
		busarrivaltime = busarrivaltime - timerightnow;
		busarrivaltime = busarrivaltime / 60;
		busarrivaltime = busarrivaltime.toFixed(0);
		setLocal("%busarrivaltime", busarrivaltime);
		exit();
	} //end if
} //end for
setLocal("%busarrivaltime", "--");//no buses within timeframe set in rest call.
