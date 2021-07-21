
/*//agenda:
5. Implement simple Timer logic and test its execution.

4. Explore Node JS Application Execution

*/


function process1()
{
 console.log("\ndisplaying ONE");
};

function process2()
{
 console.log("\ndisplaying TWO");
};

function process3()
{
 console.log("\ndisplaying THIRD");
};

setInterval(process1,5000);

setInterval(process2,1000);

setInterval(process3,1000);

console.log("\n---stop here---");
