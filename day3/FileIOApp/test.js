//javascript for reading data from a different file
//simple example for reading friends file from folder data and showing its content
//showing its contents at the output
//to perform file I/O operation we need fs module
//so we will import the fs module
var fs=require('fs');
//reference given to fs variable

//to read a file we will need its path so we will get the path inside a variable
var filePath="../data/friends.txt";

//defining callback function automatically call when the file is successfully read
var onFileRead=function(err,data){

    //if there is some error in finding the file then display such message
    //handling error
    if(err)
    {
        //printing simple custom error statement 
        //console.log("something went wrong...!!!");


        //exception handling using throw keyword
        throw err;

       //throw console.log(err);
    }
    else{
     console.log("reading data from file----");
     console.log(data.toString());//showing contents on output
     //converting data to string using toString function
    }

};

//using the inbuilt readFile function to read a file and perform operation on it.
fs.readFile(filePath,onFileRead);