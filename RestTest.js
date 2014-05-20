//javascript rest client test

function foo() 
{ 
    var request = new XMLHttpRequest(); 
    request.open("GET","http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_75403.json?key=TEST",false);
    request.send(); 
    return(request.responseText); 
} 

try 
{ 
    flashLong("request = " + foo()); 
} 
catch(e) 
{ 
    flashLong(e.message); 
} 