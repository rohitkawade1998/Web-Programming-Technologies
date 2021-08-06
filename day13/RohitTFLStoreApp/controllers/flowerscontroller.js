//here we will implement HTTP GET,POST,PUT,DELETE requests
//also invoke the DAL file functions

//to invoke functions of flowersdal.js file we ned to import that module here:
var Flower = require('../dal/flowersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function for getAll request...");
  Flower.getAllFlower(function(err, flower) {
    if (err)
      res.send(err);
    res.send(flower);
  });
};

exports.insert = function(req, res) {
    
  var new_Flower = new Flower(req.body);
  console.log(new_Flower.body);

  //handles null error , these elements are declared as not null at data base, so we need to verify them here
  
         console.log("calling controller function for insert request...");
          Flower.createFlower(new_Flower, function(err, flower) {
           if (err)
            res.send(err);             
            res.json(flower);
               
    });
};

exports.getBy = function(req, res) {
  Flower.getFlowerById(req.params.id, function(err, flower) {
    if (err)
    {
      res.send(err);
    }else{
    res.json(flower);
    };
  });
};

exports.update = function(req, res) {
  Flower.updateById(req.params.id, new Flower(req.body), function(err, flower){
      console.log("calling controller function for update request...");
     if (err)
    {
      res.send(err);
    }else{
    res.json(flower);
    };
  });
};

exports.remove = function(req, res) {
    console.log("calling controller function for remove request...");
  Flower.remove( req.params.id, function(err, flower) {
    if (err)
    {
      res.send(err);
    }else{
       res.json({ message: 'Flower successfully deleted' });
    };
    
  });
};