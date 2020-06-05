//Task 1
var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var sum = num1+num2;
alert("Sum of "+ num1 +" and " + num2 + " is " + sum);

//Task 2
var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var diff = num1-num2;
alert("difference of "+ num1 +" and " + num2 + " is " + diff);

var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var mult = num1*num2;
alert("multiplication of "+ num1 +" and " + num2 + " is " + mult);

var num1 = +prompt("enter number 1");
var num2 = +prompt("enter number 2");
var div = num1/num2;
alert("division of "+ num1 +" and " + num2 + " is " + div);

//Task 3
var myVariable;
document.write("Value after variable declaration is: "+ myVariable + "<br>");
var myVariable2 = 5;
document.write("Initial value: "+ myVariable2+ "<br>");
myVariable2+=1;
document.write("Value after increment is: "+ myVariable2+ "<br>");
myVariable2+=7;
document.write("Value after addition is: "+ myVariable2+ "<br>");
myVariable2-=1;
document.write("Value after decrement is: "+ myVariable2+ "<br>");
var output = myVariable2%3;
document.write("The remainder is: "+ output+ "<br>");

//Task 4
var cost = 600;
var tickets = +prompt("enter number of tickets");
var total_cost = cost*tickets;
document.write("Total cost to buy "+tickets+ " tickets to a movie is "+total_cost +"PKR"+"<br>");

//Task 5
var table = +prompt("enter any number");
for (i = 1; i<=10;i++){
    document.write(table+"x"+i+"="+table*i+"<br>");
}