
//two ways of declaring a functoin in java script:

/* //type1: 
function show(count)
{

    console.log("inside show");
 count++;
 console.log(count);

}
*/

//type2: 
var show=function(count)
{

    console.log("inside new show");
 count++;
 console.log(count);

}

var num=15;
show(num);