function currentTime () {
    
    let date = new Date();

    let timePH = date.toLocaleTimeString();

    let time = "PH Time: " + timePH + " |";

    document.getElementById("clock").innerHTML = time;
    setTimeout(function() {currentTime()}, 1000);

}

currentTime();

function currentTimeNZ () {
    
    let date = new Date();

    let timeNZ = date.toLocaleTimeString("en-US", {timeZone: "Pacific/Auckland"});

    let time = "| NZ Time: " + timeNZ;

    document.getElementById("clockNZ").innerHTML = time;
    setTimeout(function() {currentTimeNZ()}, 1000);

}

currentTimeNZ();