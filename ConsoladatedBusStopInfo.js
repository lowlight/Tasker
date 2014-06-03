
/*
* busSchedule2Use looks at the time of day and determins which bus stop i'll be using.
* inputs: none
* returns: 0 morning bus stop, 1 evening bus stop, 2 night bus stop
*/
function busSchedule2Use(){
	//get current time
	var systemTime = new Date();
	//if time is 0600 - 1000 return 0
	//else if time is 1001 - 1900 return 1
	//else return 2
	if(systemTime.getHours() > 5 && systemTime.getHours() < 11){
		//flash("schedule is 0");
		return 0;
	} else if(systemTime.getHours() > 9 && systemTime.getHours() < 20){
		//flash("schedule is 1");
		return 1;
	} else {
		//flash("schedule is 2");
		return 2;
	}
}

/*
* getRestData is where the REST call is made to onebusaway api
*input: busSchedule2Use (this will give the stopId to use in the REST call)
*returns: objJSON, with data from onebusaway server
*/
function getRestData(busSchedule2Use){
	//get/use stopId from the busSchedule2Use variable
	var stopId;
	if(busSchedule2Use == 0){
		stopId = "64561";
	} else if(busSchedule2Use == 1){
		stopId = "456";
	} else {
		stopId = "320";
	}
	//flash("stopId = " + stopId);

	//build url with stopId
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_" + stopId + ".json?key=TEST&minutesAfter=30&minutesBefore=0";
	//flash(url);
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);//the true false is for synchronos
    request.send(); 
    //TODO check the return code to see if an error was returned.
    //flash(request.responseText);
	return(JSON.parse(request.responseText));
}

/*
*checkArrivingBuses returns in unix time the bus that is closest to the stop identified in the stopId
*inputs: objJSON, busSchedule2Use
*returns: unixTime of closest bus
*/
function checkArrivingBuses(objJSON, busSchedule2Use){
	if(busSchedule2Use == 2){
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.entry.arrivalsAndDepartures.length; i++){
			if("554E" == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 554 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName ){
				//flash("found 554 bus");
				//TODO use the predicted arrival time.
				return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
			}
		}
		return "-2";
	} else {
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.entry.arrivalsAndDepartures.length; i++){
			if(216 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 218 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 219 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName){
				//flash("found 21X bus");
				//TODO use the predicted arrival time.
				return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
			}
		}
		return "-1";
	}
	flash("no matching buses found");
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
			flash("No 554 bus found");
			setLocal("%busarrivaltime", "E1");
			exit();
		} else {
			flash("No 21x bus found");
			setLocal("%busarrivaltime", "E2");
			exit();
		}//TODO expand this with other internal error codes i am using
	}

	//move on to calculations
	var theTime = "E9";
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



