/*
* getRestData is where the REST call is made to onebusaway api
*input: busSchedule2Use (this will give the stopId to use in the REST call)
*returns: objJSON, with data from onebusaway server
*/
function getRestDataUniversity(){
	//build url with stopId
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_456.json?key=TEST&minutesAfter=30&minutesBefore=0";
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true false is for synchronos
    request.send(); 
    if(request.status !== 200){
    	//the request failed for whatever reason.
    	//flash("Bad http response");
    	setLocal("%busarrivaltime", "__");
    	exit();
    } else {
    	return(JSON.parse(request.responseText));
    }
}

/*
* getRestData is where the REST call is made to onebusaway api
*input: busSchedule2Use (this will give the stopId to use in the REST call)
*returns: objJSON, with data from onebusaway server
*/
function getRestDataIssaquah(){
	//build url with stopId
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_64561.json?key=TEST&minutesAfter=30&minutesBefore=0";
	//flash(url);
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true false is for synchronos
    request.send(); 
    if(request.status !== 200){
    	//the request failed for whatever reason.
    	//flash("Bad http response");
    	setLocal("%busarrivaltime", "__");
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
		//flashLong("v1 Fail");
    	setLocal("%busarrivaltime", "__");
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
		//flash("v2 Fail");
    	setLocal("%busarrivaltime", "__");
    	exit();
	} else {
		//do "oh shit" here
		//flash("SHIT");
    	setLocal("%busarrivaltime", "__");
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
		setLocal("%busarrivaltime", "__");
		exit();
	}

	//move on to calculations
	var theTime = "__";
	theTime =  soonestUnixTime - objJSON.currentTime;
	theTime /= 60000;
	theTime = theTime.toFixed(0);
	setLocal("%busarrivaltime", theTime);
	//flashLong("bus in " + theTime + " min");
}

/***************************
* MAIN
****************************/


var objReturnedData;//data from onebusaway
var timeClosestBus;//unix time of the closest bus of all returned in json
var timeOfDay = new Date();//determins which stop to look at


if(timeOfDay.getHours() < 14) {
	objReturnedData = getRestDataIssaquah();
} else {
	objReturnedData = getRestDataUniversity();
}


timeClosestBus = checkArrivingBuses(objReturnedData);

convertSoonest(timeClosestBus, objReturnedData);



