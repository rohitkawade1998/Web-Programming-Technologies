
//javascript to write into a seperate file  by using its path and writeFile function inside fs module:

//step 1: first import fs module into fs variable
 var fs=require('fs');

//step 2:store the path of the file to be written
var filePath="./data/trial.txt";

//step 3:store the data to be written in a variable named:writeThis
 var writeThis="\n This is written by Rohit from write.js file \n";

 //step 5:define the call back function()
 //this will be called automatically after successfull writing on the corresponding file
 var onWriteCall=function(err)  //call back function
 {
     if(err) //if something error happened while finding/operating on the file to be written
     {
         console.log("error present !!!!")
     } //if no error then print below message
     console.log("\n Write operation success on the file :) \n");
 };

//step 4: calling the writeFile inbuilt function of fs module
//1.Argument: path of that file
//2.Argument: what data we want to write
//3.Argument: after successfull write on the file call this function to display the success statement,
//or if some error occured then display the error message
 fs.writeFile(filePath,writeThis,onWriteCall);
