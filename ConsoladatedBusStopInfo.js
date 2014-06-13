
/*
* busSchedule2Use looks at the time of day and determins which bus stop i'll be using.
* inputs: none
* returns: 0 morning bus stop, 1 evening bus stop, 2 night bus stop
*/
function busSchedule2Use(){
	//get current time
	var systemTime = new Date();
	var currentTime = systemTime.getHours + systemTime.getMinutes;
	//if time is 0600 - 1000 return 64561
	//else if time is 1001 - 1900 return 456
	//else return 320
	if(currentTime >= 0001 && currentTime <= 1100){
		return 64561;
	} else if(currentTime >= 1101 && currentTime <= 1900){
		return 456;
	} else {
		return 320;
	}
}

/*
* getRestData is where the REST call is made to onebusaway api
*input: busSchedule2Use (this will give the stopId to use in the REST call)
*returns: objJSON, with data from onebusaway server
*/
function getRestData(busSchedule2Use){
	//build url with stopId
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_" + busSchedule2Use + ".json?key=TEST&minutesAfter=30&minutesBefore=0";
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
function checkArrivingBuses(objJSON, busSchedule2Use){
	if(busSchedule2Use == 320){
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.entry.arrivalsAndDepartures.length; i++){
			if(554 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName ){
				// use the predicted arrival time.
				if(objJSON.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0){
					return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
				} else {
					return objJSON.data.entry.arrivalsAndDepartures[i].predictedArrivalTime;
				}
				
			}
		}
		return "-2";
	} else {
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
		return "-1";
	}
	//flash("no matching buses found");
	return "-3";
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

var schedule;//what time of day is it? 0, 1, 2?
var objReturnedData;//data from onebusaway
var timeClosestBus;//unix time of the closest bus of all returned in json


schedule = busSchedule2Use();

objReturnedData = getRestData(schedule);

timeClosestBus = checkArrivingBuses(objReturnedData, schedule);

convertSoonest(timeClosestBus, objReturnedData);



