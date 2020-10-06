// FILTER

let arr = [{name: "rafay", age : 21}, {name: "ali", age : 16}];
arr.filter((a)=> console.log(a)); //filtering an array
let filter = arr.filter((a)=> console.log(a));


// SEARCH

let name = "rafay";
let search = "r";

if(name.startsWith(search)){
    console.log(name);
}