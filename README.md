Tasker
======

This will be the location of my Tasker scripts to be used on my Android phone.

SCRIPTS:
ClosestBusToStop.js
This script will accept a JSON response from the One Bus Away public APIs (used Rest client plugin for tasker to make the Rest call).  The stop ID is specified in the url of the Rest call.  the returned JSON is parsed then the incoming bus routes I am interested in are checked to see if they are in the JSON.  the bus that is closest is selected and its predicted arrival time is passed to a Zooper variable so it can be displayed on the homescreen. Bus data comes from web API presorted.
