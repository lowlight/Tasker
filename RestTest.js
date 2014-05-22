//javascript rest client test

//#include "jsapi.h"

var obj;

http = require('http');

var url  = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_75403.json?key=TEST';

http.get(url, function(res){
	var data = '';
	//res.setEncoding('utf8');
	res.on('data', function(chunk){
		data += chunk;
	});

	res.on('end', function(){
		obj = JSON.parse(data);
		console.log(obj.text);
	})

});


//console.log(obj.currentTime);


/***********************************************/

//function to calc the minutes to bus arrival and display value
/*function showMinTillArrival(timerightnow, busarrivaltime, busNum){
	busarrivaltime = busarrivaltime / 1000;
	busarrivaltime = busarrivaltime - timerightnow;
	busarrivaltime = busarrivaltime / 60;
	busarrivaltime = busarrivaltime.toFixed(0);
	//setLocal("%busarrivaltime", busarrivaltime);
	//setLocal("%busnum", busNum);
	//flash(busNum + " arrives in " + busarrivaltime + " minutes");
	console.log(busNum + " arrives in " + busarrivaltime + " minutes");
	exit();//i hope this kills the script......
}*/

/**
* 
* start main chunk of code
* 
*/

//flash("getting bus times");
//setLocal("%busarrivaltime", "!!");//something unique to show the script was run
//var busarrivaltime = "!!";
//var busNum = 0;//var to pass the bus number to showMinTillArrival
//var rtres = restCall();

//check here if return code is bad?
//var json = eval ("(" + rtres + ")");
//var json = req;

//var timerightnow = 0;
//timerightnow = req.currentTime;
//console.log("time = " + req.currentTime);
/*if(timerightnow == 0){
	//flashLong("Rest returned no bus data");
	//setLocal("%busarrivaltime", "><");
	busarrivaltime = "><";
	console.log(busarrivaltime);
	exit();//no point in continuing, bailout now
}*/
//timerightnow = timerightnow / 1000; //convert 2 seconds

/*

//flash("length " + json.data.entry.arrivalsAndDepartures.length);


for(var i = 0; i < json.data.entry.arrivalsAndDepartures.length; i++) {
	//flashLong(json.data.entry.arrivalsAndDepartures[i].routeShortName);
	if(216 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 216);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 216);
		}
	} else if(218 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 218);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 218);
		}
	} else if(219 == json.data.entry.arrivalsAndDepartures[i].routeShortName){
		if(json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime == 0) {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].scheduledArrivalTime, 219);
		} else {
			showMinTillArrival(timerightnow, json.data.entry.arrivalsAndDepartures[i].predictedArrivalTime, 219);
		}
	}	
} //end for

//setLocal("%busarrivaltime", "--");//no buses within timeframe set in rest call.
busarrivaltime = "--";
*/