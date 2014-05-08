/**
 * 
 */

if(rtcode != 200){
	//bad get response
	flash("bad GET response");
	exit();
} else {
	//flash("rtcode good");
}

var json = eval ("(" + rtres + ")");
var timerightnow = json.currentTime;
timerightnow = timerightnow / 1000;
//flash("time = " + timerightnow);
var busarrivaltime = "0";

var jsonTest = json.data.entry.arrivalsAndDepartures.length;
flash("length " + jsonTest);

//flash("route " + json.data.entry.arrivalsAndDepartures[0].routeShortName);

//length: json.data.arrivalsAndDepartures.length

for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	//flash("i " + i);
	//flash("route " + json.data.entry.arrivalsAndDepartures[i].routeShortName);

	switch(json.data.entry.arrivalsAndDepartures[i].routeShortName) {
	case 216:
		//flash("case 216");
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	case 218:
		//flash("case 218");
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	case 219:
		//flash("case 219");
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
		} else {
			busarrivaltime = json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
		}
		break;
	default:
		//flash("case default");
		//flash("route = " + json.data.entry.arrivalsAndDepartures[i].routeShortName);
		//for testing set busarrivaltime for final if
		//busarrivaltime = 999999999999;
		//do nothing
	} //end switch
	
	
	if(busarrivaltime != 0){
		//flash("busarrivaltime != 0");
		busarrivaltime = busarrivaltime / 1000;
		//flash(busarrivaltime);
		busarrivaltime = (busarrivaltime - timerightnow);
		busarrivaltime = (busarrivaltime / 60);
		//flash(busarrivaltime);
		busarrivaltime = busarrivaltime.toFixed(0);
		//flash(busarrivaltime);
		exit();
	} //end if
	
} //end for
/*
busarrivaltime = busarrivaltime / 1000;
flash(busarrivaltime);
busarrivaltime = (busarrivaltime - timerightnow);
busarrivaltime = (busarrivaltime / 60);
flash(busarrivaltime);
busarrivaltime = busarrivaltime.toFixed(0);
flash(busarrivaltime);
*/
