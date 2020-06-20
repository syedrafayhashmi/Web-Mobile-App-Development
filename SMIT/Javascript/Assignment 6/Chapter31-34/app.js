// Task 1
var time = new Date();
document.write(time+"<br>");

// Task 2
var months = ["January","February","March","April","May","June","July", "August","September","October","November","December"]; 
var month = new Date().getMonth();
document.write(months[month]+"<br>");

// Task 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 
var day = new Date().getDay();
document.write("Today is " + days[day]+"<br>");

// Task 4
var day = new Date().getDay();
if(day === 0 || day === 6){
document.write("It's Fun day"+"<br>");
}

// Task 5
var date = new Date().getDate();
if(date < 16){
document.write("First fifteen days of the month"+"<br>");
}
else{
    document.write("Last days of the month"+"<br>");
}

// Task 6
var millisDate = new Date().getTime();
document.write("Current Date: " + Date() +"<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + millisDate +"<br>");
document.write("Elapsed minutes since January 1, 1970: " + millisDate/(1000*60) +"<br>");

// Task 7
var hours = new Date().getHours();
if(hours<12){
    alert("It's AM");
}
else{
    alert("Its PM");
}

// Task 8
var laterDate = new Date("Dec 31 2020");
document.write("Later date: " + laterDate+"<br>");

// Task 9
var RamadanDate = new Date("Apr 24 2020");
var todayDate = new Date();
var daysRamadan = (todayDate.getTime()-RamadanDate.getTime())/(1000*60*60*24);
document.write(Math.floor(daysRamadan) +" days have passed since 1st Ramadan, 2020"+"<br>");

// Task 10
var refDate = new Date("Dec 5 2015");
var anotherDate = new Date("Jan 1 2015");
var dif = refDate.getTime()-anotherDate.getTime();
document.write("On refernce date "+ refDate +","+ dif/(1000) + " seconds had passed since beginning of 2015" +"<br>");

// Task 11
var currentTime = new Date();
document.write("current date: " + currentTime+"<br>");
var currentHours = currentTime.getHours();
var prevTime = currentTime.setHours(currentHours-1);
document.write("1 hour ago, it was " + currentTime+"<br>");

// Task 12