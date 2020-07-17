// Task 1 Also see HTML file named index.html
function displayData(){
document.getElementById("email").innerHTML = "Email : " + document.getElementById("inputEmail").value;
document.getElementById("password").innerHTML = "Password : " + document.getElementById("inputPassword").value;
document.getElementById("fname").innerHTML = "First Name : " + document.getElementById("firstName").value;
document.getElementById("lname").innerHTML = "Last Name : " + document.getElementById("lastName").value;
document.getElementById("country").innerHTML = "Country : " + document.getElementById("inputCountry").value;
document.getElementById("city").innerHTML = "City : " + document.getElementById("inputCity").value;
document.getElementById("province").innerHTML = "Province : " + document.getElementById("inputProvince").value;

}

// Task 2 Also see HTML file named task2.html
function readMore(){
    var text = "Lorem ipsum dolor sit amet, consectetur adipisicing Non labore distinctio reprehenderit, nobis nesciunt velit,magnam repellat ad soluta maiores minima eligendi fugit voluptate ut ipsam. Cum expedita alias eos!";
    var paragraph  = document.getElementById("para");
    paragraph.innerHTML = text;
}

// Task 3 Also see HTML file named task3.html

function edit(
    
)