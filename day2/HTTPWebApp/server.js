//creating a http web server application

var http=require("http"); //using http inbuilt module,storing ref to http variable
//when server will give request we need to give response so we need to handle the request and send back the browser
//so we will create a handler function and pass its name as argument to createserver function
var friends={

    'FirstName':'Jaggya',
    'LastName':'Patil',
    'email':'jagdishpatil123@gm.com',
    'contact':'98229073'
} ;   
var onRequestHandler=function(request,response)
{
   
    console.log("Request is received---"); //when browser will hit the url then this will be displayed displayed
   //sending a text response to browser:
    //response.write("hey friend, iam Server:ROHIT here...\n"); //we will get this at browser as response

    //sending a html response to browser:
    //response.write("<h1>responding in html</h1>");

    //sending a json object as response to browser:
     response.writeHead(200,{'Content-Type':"text/json"});
     response.write(JSON.stringify(friends));
   

    response.end(); //once response is written then end this package by using end();
};

var server=http.createServer(onRequestHandler); //usinh http var calling to inbulit function createServer() ans storing ref to server var
server.listen(9999); //calling to listen function with giving argument as port number where the server need to listen
console.log("listening on port no 9999"); //showing this output on cmd/terminal