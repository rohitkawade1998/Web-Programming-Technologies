var express= require('express');
var path= require('path');

const app=express();

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");

//configure piblic folder as static folder to express module:
//logic for middleware configuration  urlencoded and json().
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(staticMiddleware+'/index.html');
});


//logic to send flower details when user will request for it:
app.get("/api/flowers",(request,response)=>{
    response.send(flowers);
});

//logic to send customer details when user will request for it:
app.get("/api/customers",(request,response)=>{
    response.send(customers);
});

//logic to send credential details when user will request for it:
app.get("/api/credentials",(request,response)=>{
    response.send(credentials);
});

//logic to handle app.get logic for /api/flowers/:id 
app.get("/api/flowers/:id",(request,response)=>{
    //extract id requested by client:
    let cid=request.params.id;
    //cid will have the clients requested id.
    //let is a scope variable, with scope only within this block
    //to  check this id details we need to iterate throughout the objects of flowers array objects
    //so we will use inbuilt function for JSON arrays:find()

    let flower=flowers.find(f=>f.id==cid);
    //now flower will contain data of flower with client requested id.
    //so we will display the details
    response.send(flower);
});

app.get("/api/customers/:id",(request,response)=>{
    let cid=request.params.id;

    let customer=customers.find(cust=>cust.id==cid);

    response.send(customer);
});


//adding validation to login page
//logic to handle app.post for /api/login using credentials array.

/*        //hard coded validation
app.post("/api/login",(request,response)=>{
     //extracting client's entered credentials
     var user=request.body;
     

     if(user.username=="ravi" && user.password=="seed")
     {
         response.send("valid user")
     } 
     else{
         response.send("invalid user");
     }
});
*/

 //Non-hard coded validation
 app.post("/api/login",(request,response)=>{
     
     //extracting client's entered credentials
     var user=request.body;

     //one by one compairing user entered credentials with the already stored array objects credentials
     //we will use inbuilt JSON function find() which will act like for loop and compare all credentials
     let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password);
     //Now, if client given credentials will be present inside our credentials array
     //then theUser object will get the onject from the credentials array
     //so display: valid user
     //else theUser object will beacome undefined as it will not get any value 
     //so display: invalid user
     if(theUser!==undefined)
     {
         response.send("valid user");
     }
     else
     {
          response.send("Invalid user");
     }
 });

app.post("/api/register",(request,response)=>{
     //extracting client's entered registration data
     var newuser=request.body;
     
     //storing data into customers array using inbuilt function push() for JSON onject:
     customers.push(newuser);

     response.send("Customer Registration Successfull");
});


app.listen(9010);
console.log("website is hosted on port no. 9010");