//first step is to install node js

//getting started with node js
//first code to display hello dear using java script
console.log("\nhello web tech family\n");

//using a string variable to display a string
var disp="welcome to web tech\n";
//using a variable to display a count
var count=1169;

//output showing using console.log function
//similar to sysout function in java
console.log(disp);
console.log(count);


//creating a object which will consist data
// JSON
// Javascript Object Notation
//in js we create an object friend{}; using var:

var friends={

    id:1,
    Name:"Ankit",
    description:"School Friend",
    onjob:true,
    sal:7,
    city:"Nagpur",
    likes:120

};


/*

console.log(friends); //this will show all data inside friends onject

//if we want to see only a particular data:
console.log("-------------------");
console.log("description: "+friends.description);

*/
//object can store only a single friends data
//but we want to store multiple friends data so we will use array for that:
//creating an array in node js:)
//array is also created using var :)

var dostlog=[]; //empty array
/*

var flowers=["jasmine","lily","lotus","rose"];  //array of strings
console.log(flowers);   //this will show all elements inside flowers array
console.log("-------------------");
console.log(flowers[1]);  //if we want to see only a particular element of an array
var marks=[23,54,67,23]; //array of numbers

*/
//array of objects
console.log("-------------------");
dostlog=[
{id:1,Name:"Ankit",description:"School Friend",onjob:true,sal:7,city:"Nagpur",likes:120},
{id:2,Name:"Vaibhav",description:"School Friend",onjob:true,sal:8.5,city:"Nagpur",likes:250},
{id:3,Name:"Jagdish",description:"Colg Friend",onjob:true,sal:9,city:"Mumbai",likes:1120},
{id:4,Name:"Siddhant",description:"School Friend",onjob:true,sal:7,city:"Nagpur",likes:520},
{id:5,Name:"Minal",description:"Colg Friend",onjob:false,sal:0,city:"pune",likes:920},
{id:6,Name:"Kajal",description:"Colg Friend",onjob:false,sal:0,city:"jalgaon",likes:1520}

];

//  console.log(dostlog);  //this will show all objects data inside dostlog array

console.log(dostlog[4]);  //this will show object at first index data inside dostlog array




