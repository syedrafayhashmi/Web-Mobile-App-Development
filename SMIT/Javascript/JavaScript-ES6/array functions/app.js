// FILTER

let arr = [{name: "rafay", age : 21}, {name: "ali", age : 16}];
arr.filter((a)=> console.log(a)); //filtering an array
let filter = arr.filter((a)=> console.log(a));


// SEARCH

let name = "rafay";
let search = "r";

if(name.startsWith(search)){  //also endsWith function
    console.log(name);
}

// Array Map

let arr1 = [2,3,4,5];
let multiply = arr1.map(a=> a*2);
console.log(multiply);
