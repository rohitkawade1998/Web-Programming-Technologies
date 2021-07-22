//javascript for reading data from a different file
//showing its contents at the output
//to perform file I/O operation we need fs module
//so we will import the fs module
var fs=require('fs');
//reference given to fs variable

//to read a file we will need its path so we will get the path inside a variable
var filePath="./data/friends.txt";

//defining callback function automatically call when the file is successfully read
var onFileRead=function(err,data){
     console.log("reading data from file----");
     console.log(data.toString());//showing contents on output
     //converting data to string using toString function

};

//using the inbuilt readFile function to read a file and perform operation on it.
fs.readFile(filePath,onFileRead);