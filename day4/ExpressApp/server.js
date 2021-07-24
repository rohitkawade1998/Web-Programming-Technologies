//node js web application to send image as response to a browsers request.

var express=require('express'); //importing express module
var path=require('path');   //importing path module

//console.log("dirname:1"+__dirname); //just to see what path is under __dirname

var app=express();  ///set global object from framework
// global object app will contain HTTP server
var staticFolder=express.static(path.join(__dirname,"public"));

//express framework configuration
app.use(staticFolder);

//express framework setting handlers
//mapping incoming request to call back function
app.get("/",(request,response)=>{
   
  response.sendFile(staticFolder+"/index.html");
     
});
app.get("/hello",(request,response)=>{
   
   var friends={
       "name":"ankya",
       "contact":897555

   };
  response.send(friends);
     
});

app.listen(9000); //application will listen on 9000 port number
//showing the message on serverside that server is listening on porn number 9000


console.log("Express Application listening on port number: 9000");