//creating a http web server application

var http=require("http"); //using http inbuilt module,storing ref to http variable
//when server will give request we need to give response so we need to handle the request and send back the browser
//so we will create a handler function and pass its name as argument to createserver function
var onRequestHandler=function(request,response)
{
    response.write("hey friend, iam Server:ROHIT here..."); //we will get this at browser as response
  
    response.end(); //once response is written then end this package by using end();
};

var server=http.createServer(onRequestHandler); //usinh http var calling to inbulit function createServer() ans storing ref to server var
server.listen(9999); //calling to listen function with giving argument as port number where the server need to listen
console.log("listening on port no 9999"); //showing this output on cmd/terminal