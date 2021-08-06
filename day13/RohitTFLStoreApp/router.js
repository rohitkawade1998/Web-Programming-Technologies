
//This file will accept request form server
//for any type of request(GET,PUT,POST and DELETE) 
// router maps them with the proper callback function(inside controller)
//its only work is to join the request with the respective Handler function

//Express Routing is a mechanism to mapping incomming HTTP requests with appropriate controller functions

// API routes for Controller callback functions
//a Separate responsibility  for navigation :

var flowerController=require("./controllers/flowerscontroller");
var customerController = require("./controllers/customersController");
var orderController = require("./controllers/ordersController");
var orderItemController = require("./controllers/ordersItemController");
var productController = require("./controllers/productscontroller");

//get the app object of express from server.js

module.exports=function(app){

    //Flowers HTTP request Mapping
    //it will internally call: http://localhost:9898/api/flowers


    //Flowers HTTP request Mapping using inbuilt keyword: 'route',
    app.route("/api/flowers")              
    .get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)           //http://localhost:9898/api/flowers/:id     GET
    .put(flowerController.update)          //http://localhost:9898/api/flowers/:id     PUT
    .delete(flowerController.remove);      //http://localhost:9898/api/flowers/:id     DELETE


  //Customer HTTP request Mapping
    app
    .route("/api/customers")
    .get(customerController.getAll)
    .post(customerController.insert);

  app
    .route("/api/customers/:id")
    .get(customerController.getBy)
    .put(customerController.update)
    .delete(customerController.remove);

  //order HTTP request Mapping
  app
    .route("/api/orders")
    .get(orderController.getAll)
    .post(orderController.insert);

  app
    .route("/api/orders/:id")
    .get(orderController.getBy)
    .put(orderController.update)
    .delete(orderController.remove);

  //OrderITEM HTTP request Mapping
  app
    .route("/api/orderitems")
    .get(orderItemController.getAll)
    .post(orderItemController.insert);

  app
    .route("/api/orderitems/:id")
    .get(orderItemController.getBy)
    .delete(orderItemController.remove);

  //prodct HTTP request Mapping
  app
    .route("/api/products")
    .get(productController.getAll)
    .post(productController.insert);

  app
    .route("/api/products/:id")
    .get(productController.getBy)
    .delete(productController.remove);


};






  