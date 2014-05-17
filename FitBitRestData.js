//get FitBit data
//send GET/POST as needed to FitBit servers, get returned json
var returnedJson = (GET(url, options, returnType));
if(GETreturnCode == "BAD"){
	//fail notification
	exit();
}
var FitBitData = json.Parse(returnedJson);

//get steps for day
var dailySteps = FitBitData.data.something.steps;
if(dailySteps == "BAD"){
	//fail notification
	exit();
}

//get steps for day goal
var dailyStepsGoal = FitBitData.data.something.stepsGoal;
if(dailyStepsGoal == "BAD"){
	//fail notification
	exit();
}

//get calories burned for day
var dailyCaloriesBurned = FitBitData.data.something.caloriesBurned;
if(dailyCaloriesBurned == "BAD"){
	//failure notification
	exit();
}

//get calories burned for day goal
var dailyCaloriesBurnedGoal = FitBitData.data.something.caloriesBurnedGoal;
if(dailyCaloriesBurnedGoal == "BAD"){
	//failure notification
	exit();
}

//get distance walked
var dailyDistance = FitBitData.data.something.distance;
if(dailyDistance == "BAD"){
	//failure notification
	exit();
}

//get distance walked goal
var dailyDistanceGoal = FitBitData.data.something.distanceGoal;
if(dailyDistanceGoal == "BAD"){
	//failure notification
	exit();
}

//get calories eaten for day
var dailyCaloriesEaten = FitBitData.data.something.caloriesConsumed;
if(dailyCaloriesEaten == "BAD"){
	//failure notification
	exit();
}

//get calories eaten for day goal
var dailyCaloriesEatenGoal = FitBitData.data.something.caloriesConsumedGoal;
if(dailyCaloriesEatenGoal == "BAD"){
	//failure notification
	exit();
}

//display data gotten above
//define colors for good, bad, etc.
var goodColor = #00ff00;
var mediumColor = #ffff00;
var badColor = #ff0000;
var plainTextColor = #abc123;

//define the formating tags for zooper (or whatever else used)
var startBold = "[b]";
var endBold = "[/b]";
var startColor = "[c=";
var end Color = "[/c]";
var startFlash = "[f]";
var endFlash = "[/f]";

//check what % goal has been meet, then format string, and use
//setLocal method to get values out

//steps for the day
var stepsDisplayString = null;
var percentDone = (dailySteps / dailyStepsGoal));
if(percentDone < .3){
	//0%-30% done, this is bad
	stepsDisplayString = startFlash + startBold + startColor + badColor + "]" + dailySteps + endColor + endBold + endFlash;
} else if (percentDone < .6){
	//31%-60% done, this is ok
	stepsDisplayString = startBold + startColor + mediumColor + "]" + dailySteps + endColor + endBold;
} else if (percentDone < .9){
	//61%-90% done, this is good
	stepsDisplayString = startColor + goodColor + "]" + dailySteps + endColor;
} else {
	//91%-+++ done, this is great
	stepsDisplayString = startBold + startColor + goodColor + "]" + dailySteps + endColor + endBold;
}