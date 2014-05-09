/**
 * 
 */

if(rtcode != 200){
	flash("GET error " + rtcode);
	exit();
} 

var json = eval ("(" + rtres + ")");
var timerightnow = json.currentTime;
timerightnow = timerightnow / 1000;
//flash("length " + json.data.entry.arrivalsAndDepartures.length);
busarrivaltime = "00";

for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	//flash("route " + json.data.entry.arrivalsAndDepartures[i].routeShortName);
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
	
	//flash("switch " + busarrivaltime);

	if(busarrivaltime != "00"){
		busarrivaltime = busarrivaltime / 1000;
		busarrivaltime = busarrivaltime - timerightnow;
		busarrivaltime = busarrivaltime / 60;
		busarrivaltime = busarrivaltime.toFixed(0);
		setLocal("%busarrivaltime", busarrivaltime);
		//flash("set " + busarrivaltime);
		exit();
	} //end if
} //end for
//flash("end for loop");
setLocal("%busarrivaltime", "--");
