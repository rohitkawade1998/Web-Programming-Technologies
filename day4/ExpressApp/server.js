//node js web application to send image as response to a browsers request.

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

//express framework setting handlers
//mapping incoming request to call back function
//two request handlers are implemented
//1st:request handler for url:http://localhost:9000
app.get("/",(request,response)=>{
   
  response.sendFile(staticFolder+"/index.html");
     
});
//2nd:request handler for url: http://localhost:9000/hello
app.get("/hello",(request,response)=>{
   var friends={ "name":"ankya", "contact":897555};
   response.send(friends);
     
});


//both of these handlers are HTTP request handlers of type GET Request
//GET function takes two parameters:(path,callback function)

app.listen(9000); //application will listen on 9000 port number
//showing the message on serverside that server is listening on porn number 9000


console.log("Express Application listening on port number: 9000");