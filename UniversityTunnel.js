
/*
* getRestData is where the REST call is made to onebusaway api
*input: busSchedule2Use (this will give the stopId to use in the REST call)
*returns: objJSON, with data from onebusaway server
*/
function getRestData(){
	//build url with stopId
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_456.json?key=TEST&minutesAfter=30&minutesBefore=0";
	//flash(url);
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true false is for synchronos
    request.send(); 
    if(request.status !== 200){
    	//the request failed for whatever reason.
    	flash("Bad http response");
    	setLocal("%busarrivaltime", "E4");
    	exit();
    } else {
    	return(JSON.parse(request.responseText));
    }
}

/*
*checkArrivingBuses returns in unix time the bus that is closest to the stop identified in the stopId
*inputs: objJSON, busSchedule2Use
*returns: unixTime of closest bus
*/
function checkArrivingBuses(objJSON){
	if(objJSON.version == "1"){
		//do v1 stuff here
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.arrivalsAndDepartures.length; i++){
			if(216 == objJSON.data.arrivalsAndDepartures[i].routeShortName || 218 == objJSON.data.arrivalsAndDepartures[i].routeShortName || 219 == objJSON.data.arrivalsAndDepartures[i].routeShortName){
				// use the predicted arrival time.
				if(objJSON.data.arrivalsAndDepartures[i].predictedArrivalTime == 0){
					return objJSON.data.arrivalsAndDepartures[i].scheduledArrivalTime;
				} else {
					return objJSON.data.arrivalsAndDepartures[i].predictedArrivalTime;
				}
			}
		}
		flashLong("V1 21x Fail");
    	setLocal("%busarrivaltime", "E3");
    	exit();
	} else if(objJSON.version == "2"){
		//do v2 stuff here
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.entry.arrivalsAndDepartures.length; i++){
			if(216 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 218 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 219 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName){
				// use the predicted arrival time.
				if(objJSON.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0){
					return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
				} else {
					return objJSON.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
				}
			}
		}
		flashLong("V2 21x Fail");
    	setLocal("%busarrivaltime", "E3");
    	exit();
	} else {
		//do "oh shit" stuff here
		flashLong("SHIT");
    	setLocal("%busarrivaltime", "die");
    	exit();
	}

}

/*
*convertSoonest takes the unix time of the closest bus and converts it to a human 
*readable number and passes that to Zooper
*inputs: soonestUnixTime
*returns: void
*/
function convertSoonest(soonestUnixTime, objJSON){
	//check if the closest bus returned a negative number, if it did, error out here.
	if(soonestUnixTime < 0){
		//negative num returned, bad, stop.
		if(soonestUnixTime == "-1"){
			//flash("No 554 bus found");
			setLocal("%busarrivaltime", "E1");
			exit();
		} if(soonestUnixTime == "-2") {
			//flash("No 21X bus found");
			setLocal("%busarrivaltime", "E2");
			exit();
		} if(soonestUnixTime == "-3") {
			//flash("No matching buses");
			setLocal("%busarrivaltime", "E3");
			exit();
		}
	}

	//move on to calculations
	var theTime = "E5";
	theTime =  soonestUnixTime - objJSON.currentTime;
	theTime /= 60000;
	theTime = theTime.toFixed(0);
	setLocal("%busarrivaltime", theTime);
	flashLong("bus in " + theTime + " min");
	return 1;
}

/***************************
* MAIN
****************************/


var objReturnedData;//data from onebusaway
var timeClosestBus;//unix time of the closest bus of all returned in json



objReturnedData = getRestData();

timeClosestBus = checkArrivingBuses(objReturnedData);

convertSoonest(timeClosestBus, objReturnedData);



