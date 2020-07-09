var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML = sec;
        msec=0;
    }
    if (sec>=60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
 }
interval = setInterval(timer,10);