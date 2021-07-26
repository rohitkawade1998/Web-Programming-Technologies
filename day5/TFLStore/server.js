var express=require('express');
var path=require('path');
const app=express();
const {urlencoded}=require('body-parser')
//configure public folder as static folder to express module
var staticMIddleWare=express.static(path.join(__dirname,"public"));
app.use(staticMIddleWare);

app.use(urlencoded({extended:true}));
app.use(express.json());


app.get("/",(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});


app.post("/register",(request,response)=>{
    console.log(request.body); //to extract data entered by client and display at client side
    console.log("Register form is posted by browser and recieved at server");
});

app.post("/login",(request,response)=>{
    console.log(request.body); //to extract data entered by client and display at client side
    var user=request.body;
    if(user.email=="rohitkawade@123"&&user.password=="rohitcool")
    {
        console.log(" Valid user :)");
    }
    else
    {
        console.log("Invalid user :( !!!");
    }
    console.log("Login form is posted by browser and recieved at server");
});

app.listen(7000);
console.log("website is being hosted on port no. 7000");