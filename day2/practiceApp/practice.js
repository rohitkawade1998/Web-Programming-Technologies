
//two ways of declaring a functoin in java script:

 //type1: 
function show1(count1)
{

    console.log("inside show1");
 count1++;
 console.log(count1);

}


//type2: 
var show2=function(count2)
{

    console.log("inside new show2");
 count2++;
 console.log(count2);

}

var num=15;
show1(num);
show2(num);
///we can see they both give same output