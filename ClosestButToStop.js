/**
 * 
 */

if(rtcode != 200){
	//bad get response
	flash("bad GET response");
	exit();
}

var json = eval ("(" + rtres + ")");
var timerightnow = json.currentTime;
timerightnow = timerightnow / 1000;
var busarrivaltime = "0";

//var jsonTest = json.data.entry.arrivalsAndDepartures.length;
//flash("length " + jsonTest);

//flash("route " + json.data.entry.arrivalsAndDepartures[0].routeShortName);

//length: json.data.arrivalsAndDepartures.length

for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	flash("i " + i);
	flash("route " + json.data.entry.arrivalsAndDepartures[i].routeShortName);

	/*
	switch(json.data.arrivalsAndDepartures[i].routeShortName) {
	case 216:
		flash("case 216");
		if(json.data.arrivalsAndDepartures[i].predictedArrivalTime == 0)
			busarrivaltime = json.data.arrivalsAndDepartures[i].scheduledArrivalTime;
		else
			busarrivaltime = json.data.arrivalsAndDepartures[i].predictedArrivalTime;
		break;
	case 218:
		flash("case 218");
		if(json.data.arrivalsAndDepartures[i].predictedArrivalTime == 0)
			busarrivaltime = json.data.arrivalsAndDepartures[i].scheduledArrivalTime;
		else
			busarrivaltime = json.data.arrivalsAndDepartures[i].predictedArrivalTime;
		break;
	case 219:
		flash("case 219");
		if(json.data.arrivalsAndDepartures[i].predictedArrivalTime == 0)
			busarrivaltime = json.data.arrivalsAndDepartures[i].scheduledArrivalTime;
		else
			busarrivaltime = json.data.arrivalsAndDepartures[i].predictedArrivalTime;
		break;
	default:
		flash("case default");
		//do nothing
	}
	*/
	/*
	if(busarrivaltime != 0){
		flash("busarrivaltime != 0");
		exit();
	}
	*/
}
/*
busarrivaltime = busarrivaltime / 1000;
flash(busarrivaltime);
busarrivaltime = (busarrivaltime - timerightnow);
busarrivaltime = (busarrivaltime / 60);
flash(busarrivaltime);
busarrivaltime = busarrivaltime.toFixed(0);
flash(busarrivaltime);
*/
