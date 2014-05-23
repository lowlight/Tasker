
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
		return 0;
	} else if(systemTime.getHours() > 9 && systemTime.getHours() < 20){
		return 1;
	} else {
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
	
	//build url with stopId
	//if trouble, try single quotes in url
	var url = "http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_" + stopId + ".json?key=TEST&minutesAfter=0&minutesBefore=30";
	//make REST call
	var request = new XMLHttpRequest(); 
    request.open("GET",url,false);
    request.send(); 
    //check this statmentout.......
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
				flashLong("arrival time = " + objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime);
				return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
			}
		}
		return "-2";
	} else {
		//bus data is sorted by the server, so the first hit is the closest.
		for(i = 0; i < objJSON.data.entry.arrivalsAndDepartures.length; i++){
			if(216 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 218 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName || 219 == objJSON.data.entry.arrivalsAndDepartures[i].routeShortName){
				return objJSON.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime;
			}
		}
		return "-1";
	}

	//foreach arrival in the objJSON do the following
	//is it correct bus number? if yes save arrival time (discuss scheduled vs. predicted)
	//compare future arrival times to saved one, keep the closest one

	//after all comparisons, return the remaining unixTime
	//error checking if empty
}

/*
*convertSoonest takes the unix time of the closest bus and converts it to a human readable number and passes that to Zooper
*inputs: soonestUnixTime
*returns: void
*/
function convertSoonest(soonestUnixTime, objJSON){
	//check if the closest bus returned a negative number, if it did, error out here.
	if(soonestUnixTime < 0){
		//negative num returned, this bad, stop.
		if(soonestUnixTime == "-1"){
			flash("No 554 bus found");
			setLocal("%busarrivaltime", "E1");
			exit();
		} else {
			flash("No 216/218/219 bus found");
			setLocal("%busarrivaltime", "E2");
			exit();
		}
	}
	if(objJSON.currentTime < 1000000){
		//not big enough, bad
		flash("Object current time seems wrong, time = " + objJSON.currentTime);
		setLocal("%busarrivaltime", "E3");
		exit();
	}

	//convert to human readable minutes
	//use setLocal to pass this number to Zooper to be displayed on screen
	if(objJSON.currentTime < soonestUnixTime){
		flash("obj time < soonest time");
		//something isn't right
		//flash("problem with arrival time");
		//flash("obj time = " + objJSON.currentTime);
		//flash("bus time = " + soonestUnixTime);
		//setLocal("%busarrivaltime", "E3");
		//exit();
	} 

	//move on to calculations
	var theTime;
	theTime =  objJSON.currentTime - soonestUnixTime;
	theTime /= 1000;
	theTime /= 60;
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

//it should be done and work perfectly......

