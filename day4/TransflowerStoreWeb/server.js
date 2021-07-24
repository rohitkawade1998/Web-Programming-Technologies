//standard web application using npm modules and express framework
//in this application we will handle the login and register request of client from browser side
//we will handle GET,POST type of HTTP requests

var express=require('express'); //importing the express module
var path=require('path');  //importing the path module
const app=express();

//configure public folder as static folder to express module
//whenever any request will come it will search all the required resources from this folder
//Configure public folder as static folder  to express module
var staticMiddleware=express.static(path.join(__dirname,"public"));
// configuring middleware
app.use(staticMiddleware);


//get handler for the first request from the browser
//this will return the index.html file(home page) of the application
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

//post request handler for login operation request
app.post("/login",(request,response)=>{
    console.log("login page is posted by client on browser side and Received at Server");
});

//post request handler for register operation request
app.post("/register",(request,response)=>{
    console.log("Register page is posted by client on browser side and Received at Server");
});

app.listen(9002);
console.log("Website is being hosted on port number: 9002");
