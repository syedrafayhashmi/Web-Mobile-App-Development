
var count = 0;
var interval;
function timer(){
    count++;
    console.log(count);
}

function stopInterval(){
    clearInterval(interval);
    console.log("Function stopped by another function");
}
interval = setInterval(timer,1000);
setTimeout(stopInterval,5000);