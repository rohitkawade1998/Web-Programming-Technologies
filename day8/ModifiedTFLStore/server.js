const { response } = require('express');
var express= require('express');
var path= require('path');



var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");
const { request } = require('http');
var app=express();

//configure piblic folder as static folder to express module:
//logic for middleware configuration  urlencoded and json().
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//tested the app.get,app.post using POSTMAN application
//it allows us to test our backend functions without developing the frontend(html files)

app.get("/",(req,res)=>{
    res.sendFile(staticMiddleware+'/index.html');
});

app.post("/api/register",(request,response)=>{

     //extracting client's entered registration data
     var newuser=request.body;
     
     //storing data into customers array using inbuilt function push() for JSON onject:
     customers.push(newuser);

     response.send("Customer Registration Successfull");
});

//logic to send credential details when user will request for it:
app.get("/api/credentials",(request,response)=>{
    response.send(credentials);
});

//operations of login and registration:

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

 //Non-hard coded LOGIN request validation :
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


 //HTTP CRUD Operation for Customers:

 //logic to send customer details when user will request for it:
 app.get("/api/customers",(request,response)=>{
    console.log("Customer data displayed at browser");
    response.send(customers);
    
 });

 //to display the customer data whose id given at client side :
 app.get("/api/customers/:id",(request,response)=>{
    let cid=request.params.id;

    let customer=customers.find(cust=>cust.id==cid);

    response.send(customer);
});

 //to add a customer object inside customers array whatever data client will give.
 app.post("/api/customers",(request,response)=>{
    var newCustomer=request.body;
    console.log("data to be added at customers @server");
    customers.push(newCustomer);
    response.send("customer data updated");
});

//server side Update operation  for incoming HTTP put request
app.put("/api/customers/:id",(request,response)=>{
    var customerToBeUpdated=request.body;
    let cid=request.params.id;
    for(var i=0;i<customers.length;i++)
    {
        if(customers[i].id==cid)
        {
            customers[i]=customerToBeUpdated;
        }
        
    }
    response.send(request.body);
    console.log("Data is updated, of customer with id: "+cid+".");
});

//function for delete a object from the flowers array directly from browser
app.delete("/api/customer/:id",(request,response)=>{
    //extracting client's entered customer id and save to new variable cid
    let cid=request.params.id;
    
    //logic to delete: we will store all the flowers object not having client given id in a different array
    let remainingCustomers=customers.filter(cust=>cust.id!=cid);
    
    //now we get all objects except the one with requested id
    //so we will replace the original flowers array with these remaining objects: 
    customers=remainingCustomers;
    //now that onject will be deleted from the flowers array

    response.send("Customer with id: "+cid+" is deleted ");
 
    console.log("Customer with id: "+cid+" is deleted ");

});



//HTTP CRUD Operation for Flowers:

//logic to send flower details when user will request for it:
app.get("/api/flowers",(request,response)=>{
    response.send(flowers);
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




//to add a flower object inside flowers array whatever data client will give.
app.post("/api/flower",(request,response)=>{

     //extracting client's entered flower data
     var newFlower=request.body;
     
     //storing data into customers array using inbuilt function push() for JSON onject:
     flowers.push(newFlower);

     response.send("New Flower Data Added Successfully");
});

//server side Update operation  for incoming HTTP put request
app.put("/api/flowers/:id",(request,response)=>{
    var flowerToBeUpdated=request.body;
    let fid=request.params.id;
    for(var i=0;i<flowers.length;i++)
    {
        if(flowers[i].id==fid)
        {
            flowers[i]=flowerToBeUpdated;
        }
        
    }
    response.send(request.body);
    console.log("Data is updated, of flower with id: "+fid+".");
});



//function for delete a object from the flowers array directly from browser
app.delete("/api/flowers/:id",(request,response)=>{
    //extracting client's entered flower id and save to new variable cid
    let cid=request.params.id;
    
    //logic to delete: we will store all the flowers object not having client given id in a different array
    let remainingFlowers=flowers.filter(flower=>flower.id!=cid);
    
    //now we get all objects except the one with requested id
    //so we will replace the original flowers array with these remaining objects: 
    flowers=remainingFlowers;
    //now that onject will be deleted from the flowers array

    response.send("flower with id: "+cid+" is deleted ");

});





app.listen(9010);
console.log("website is hosted on port no. 9010");