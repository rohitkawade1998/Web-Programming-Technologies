//node js simple dinamic web application 
//when client will press a button on the web page he will get an alert message displayed on the web page.

var express=require('express'); //importing express module
var path=require('path');   //importing path module

//console.log("dirname:1"+__dirname); //just to see what path is under __dirname

var app=express();  ///set global object from framework
// global object app will contain HTTP server

// __dirname ---->  physical path : F:\webtech\day4\ExpressApp
               //   virtual path:  http://localhost:9000


//for configuration of middleware 
//for registration of http requests with their handlers
var staticFolder=express.static(path.join(__dirname,"public"));

//express framework configuration
app.use(staticFolder); //configure static middleware

//default request call this:
app.get("/",(request,response)=>{
   
  response.sendFile(staticFolder+"/index.html");
     
});


app.listen(9000); //application will listen on 9000 port number
//showing the message on serverside that server is listening on porn number 9000


console.log("Express Application listening on port number: 9000");