function showtime() {
    var date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = "PH Time: " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showtime, 1000);
}

showtime();

function showtimeNZ() {
    var date = new Date();
    
    var h = date.getHours() + 4;
    var m = date.getMinutes() - 1;
    var s = date.getSeconds() + 7;

    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var timeNZ = "NZ Time: " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplayNZ").innerHTML = timeNZ;
    document.getElementById("MyClockDisplayNZ").textContent = timeNZ;

    setTimeout(showtimeNZ, 1000);
}

showtimeNZ();