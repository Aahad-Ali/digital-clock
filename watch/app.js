function display() {

    var cTime = new Date();
    var hour = cTime.getHours();
    var minute = cTime.getMinutes();
    var second = cTime.getSeconds();
    var session = document.getElementById("session");

    if (hour >= 12) {

        session.innerHTML = "PM";
    }
    else {
        session.innerHTML = "AM";
    }

    if (hour > 12) {
        hour = hour - 12;

    }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    // document.getElementById("session").innerHTML = session;





}

setInterval(display, 10);




// function currentTime() {
//     let date = new Date();
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";

//     if (hh === 0) {
//         hh = 12;
//     }
//     if (hh > 12) {
//         hh = hh - 12;
//         session = "PM";
//     }

//     hh = (hh < 10) ? "0" + hh : hh;
//     mm = (mm < 10) ? "0" + mm : mm;
//     ss = (ss < 10) ? "0" + ss : ss;

//     let time = hh + ":" + mm + ":" + ss + " " + session;

//     document.getElementById("clock").innerText = time;
//     let t = setTimeout(function () { currentTime() }, 1000);
// }

// currentTime();