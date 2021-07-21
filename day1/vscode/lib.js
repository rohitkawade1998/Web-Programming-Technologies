/*
3.Create new lib.js file with Display, show and addition, subtraction , multiplication function implementation

4.Test each functions using NOde js command
*/
// creating functions in node js:
// javascript library cosist of reusable functions

function show() //declaring the function with no arguments
{
    //function body
 console.log("----inside show function----");
 var count=25;
     //count=count +1;
 count++;
 console.log(count);
}

function display(institute) //declaring the function with no arguments
{
    console.log("\n----inside display function----");
    console.log("Your Institute is : "+institute);

}

function addition(var1,var2)
{
    console.log("\n----inside addition function----");
    var sum=var1+var2;
    return sum;
}

function subtraction(var1,var2)
{
    console.log("\n----inside subtraction function----");
    var result=var1-var2;
    return result;
}

function multiplication(var1,var2)
{
    console.log("\n----inside multiplication function----");
    var result=var1*var2;
    return result;
}

function division(var1,var2)
{
    console.log("\n----inside division function----");
    var result=var1/var2;
    return result;
}

/*  //(1):

//1st method: calling show function
show();

*/

/* //(2):
//2nd method: calling display function by passing a variable
var institute="Iacsd";
display(institute);

*/

/*  //(3):
//1st method: calling addition function giving values directly
//console.log("Addition is: "+addition(15,25));

*/

/*  //(4):
//2nd method: //calling addition function giving values directly
//var showaddition=addition(15,25); //storing result of addition function inside showaddition variable
//console.log(showaddition); //displaying the stored variable

*/


/* //(5):
//displaying adition,subtraction,multi,div by passing integers to the functions.
var num1=45;
var num2=5;
console.log("numbers: "+num1+" "+num2);
console.log("Addition is: "+addition(num1,num2));
console.log("subtraction is: "+subtraction(num1,num2));
console.log("multiplication is: "+multiplication(num1,num2));
console.log("division is: "+division(num1,num2));

*/

  //(6):
//Nested function
//Blocking call 
//now using nested functions
//calling above functons inside a main function:
function main()
{
console.log("\n---inside main---\n")
var num1=45;
var num2=5;
console.log("numbers: "+num1+", "+num2);
console.log("Addition is: "+addition(num1,num2));
console.log("subtraction is: "+subtraction(num1,num2));
console.log("multiplication is: "+multiplication(num1,num2));
console.log("division is: "+division(num1,num2));

};

main();

console.log("\n---last statement---");







