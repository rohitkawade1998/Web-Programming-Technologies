//creating a http web server application

var http=require("http"); //using http inbuilt module,storing ref to http variable
//when server will give request we need to give response so we need to handle the request and send back the browser
//so we will create a handler function and pass its name as argument to createserver function

var friend={      //creating single json onject:

    'FirstName':'Jaggya',
    'LastName':'Patil',
    'email':'jagdishpatil123@gm.com',
    'contact':'98229073'
} ;  

//creating array of json onjects:
var Gang=[
    
{'FirstName':'Jaggya','LastName':'Patil','email':'jagdishpatil123@gm.com','contact':'98229073'},
{'FirstName':'Ankit','LastName':'Rodekar','email':'ankit123@gm.com','contact':'98229073'},
{'FirstName':'Vaibhav','LastName':'Wankhede','email':'vaibhav123@gm.com','contact':'98229073'},
{'FirstName':'Himanshu','LastName':'Bharadwaj','email':'himanshu123@gm.com','contact':'98229073'},
{'FirstName':'Kunal','LastName':'Rathode','email':'kunal123@gm.com','contact':'98229073'}

];

//defining the onRequestHandler which will be automatically called when browser will send request
//as client will hit the url: http://localhost:9999/   the request will be sent to this server
var onRequestHandler=function(request,response)
{
   
    console.log("Request is received---"); //when browser will hit the url then this will be displayed displayed
    
   //1.sending a text response to browser:
    //response.write("hey friend, iam Server:ROHIT here...\n"); //we will get this at browser as response

    //2.sending a html response to browser:
    //response.write("<h1>responding in html</h1>");

    //3.sending a json object as response to browser:
     //response.writeHead(200,{'Content-Type':"text/json"});
    // response.write(JSON.stringify(friends));

     //4.sending an array of json objects as response to browser:
     response.writeHead(200,{'Content-Type':"text/json"});
     response.write(JSON.stringify(Gang));
   

    response.end(); //once response is written then end this package by using end();
};

var server=http.createServer(onRequestHandler); //usinh http var calling to inbulit function createServer() ans storing ref to server var
server.listen(9999); //calling to listen function with giving argument as port number where the server need to listen
console.log("listening on port no 9999"); //showing this output on cmd/terminal