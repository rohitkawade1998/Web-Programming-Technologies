//this is Flower Store Application
//developing using : SOC--Seperation Of Concern

//importing the express,path modules:

const express=require('express');
var path=require('path');

//creating object for global function
var app=express();

//configure Express Middleware:
//HTTP middleware configuration:
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//get type function for default browsers request:
app.get("/",function(req,res){
    res.sendFile("index.html");
});

//Router configuration
var routes=require("./router");
routes(app);            // going invoke module Router from router.js

//listen Mode
app.listen(9800);
console.log("Rohit: Express TFLSTORE APP i listening on Port Number: 9800");