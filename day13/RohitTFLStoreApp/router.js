
//This file will accept request form server
//for any type of request(GET,PUT,POST and DELETE) 
// router maps them with the proper callback function(inside controller)
//its only work is to join the request with the respective Handler function

//Express Routing is a mechanism to mapping incomming HTTP requests with appropriate controller functions

// API routes for Controller callback functions
//a Separate responsibility  for navigation :

var flowerController=require("./controllers/flowerscontroller");

//get the app object of express from server.js

module.exports=function(app){

    //Flowers HTTP request Mapping
    //it will internally call: http://localhost:9898/api/flowers


    //Flowers HTTP request Mapping using inbuilt keyword: 'route',
    app.route("/api/flowers")              
    .get(flowercontroller.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowercontroller.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowercontroller.getBy)           //http://localhost:9898/api/flowers/:id     GET
    .put(flowercontroller.update)          //http://localhost:9898/api/flowers/:id     PUT
    .delete(flowercontroller.remove);      //http://localhost:9898/api/flowers/:id     DELETE    


};


  