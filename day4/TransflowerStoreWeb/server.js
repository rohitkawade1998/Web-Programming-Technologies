//standard web application using npm modules and express framework
//in this application we will handle the login and register request of client from browser side
//we will handle GET,POST type of HTTP requests

//now we want to extract the data entered by client while filling the login and registration form
//so we will require a body-parser module to be imported
const {urlencoded}=require('body-parser');

var express=require('express'); //importing the express module
var path=require('path');  //importing the path module
const app=express();

//configure the middleware for the body-parser module
app.use(urlencoded({extended:true}));

//configure the middleware for the express module
app.use(express.json());

//configure public folder as static folder to express module
//whenever any request will come it will search all the required resources from this folder
//Configure public folder as static folder  to express module
var staticMiddleware=express.static(path.join(__dirname,"public"));
// configuring middleware
app.use(staticMiddleware);



// 3 middlewares are configured in our program 

//get handler for the first request from the browser
//this will return the index.html file(home page) of the application
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

//post request handler for login operation request
app.post("/login",(request,response)=>{

     //the request sent by user from browser side will contain the entered data in the request body so we will extract the body
    console.log(request.body);  //to extract details entered by client while filling the login form

     //when the user will hit the login button then this msg will be showm at the server side
    console.log("login page is posted by client on browser side and Received at Server");
});

//post request handler for register operation request
app.post("/register",(request,response)=>{
    
    console.log(request.body);  //to extract details entered by client while filling the registration form

    //when the user will hit the register button then this msg will be showm at the server side
    console.log("Register page is posted by client on browser side and Received at Server");
});

app.listen(9002);
console.log("Website is being hosted on port number: 9002");
