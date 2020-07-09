
var count = 0;
var interval;
function timer(){
    count++;
    console.log(count); //timer function
}

function stopInterval(){
    clearInterval(interval);
    console.log("Function stopped by another function"); // stops the timer function saved in interval variable
}
interval = setInterval(timer,1000); // runs every one second
setTimeout(stopInterval,5000); // stops after 5 seconds