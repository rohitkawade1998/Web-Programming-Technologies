//all the logic of firing the query will be written in this code

//Flowers database CRUD operation

//importing the mysqlconnect module here
var sql = require('./mysqlconnect');

//model
//object oriented approach
//define Model

//creating a Flower function :
var Flower = function(Flower){
    //constructor:
    this.id = Flower.id;
    this.title = Flower.title;
    this.description = Flower.description;
    this.unitprice = Flower.unitprice;
    this.quantity = Flower.quantity;
    this.likes = Flower.likes;

};

//creating functions such that when they will be called respective query will be fired
//Attach member function Model to perform Database CRUD operations:
//here result is the call back function
//newFlower is the Json object passed from the calling function
Flower.createFlower = function (newFlower, result) {
    console.log("New flower adding process started...");
    console.log(newFlower);
    
     sql.query("INSERT INTO flowers SET ?", newFlower,function(err,res){
        if (err) {
            console.log("error: "+err);
            result(err,null);
        } else {
                  console.log("new flower inserted  :) ");
                  result(null,res.id);
        }
    });
};


//function to display all flowers details:
Flower.getAllFlower=function(result){
    console.log("Displaying all flowers data, process started...");

    sql.query("select * from flowers",function(err,res){

        if(err){
            console.log("error: "+err);
            //if error occured while getting response from data base
            //then forward error as the result to the calling function
            result(null,err);
        }
        else{
            console.log('All Flowers :'+res);
            result(null,res);
        }
    });
};

//function to Get flower details by id:
Flower.getFlowerById=function(FlowerId,result){
    console.log("Get flower by id, process started...");

     
     sql.query("Select * from flowers where id = ? ", FlowerId,function(err,res){
                 if(err) {
                    console.log("error: ", err);
                    result(err, null);
                  }
                  else{
                    result(null, res);     //result : query OK,...
                  }
    });
    
};


//function to Update flower details: ( change the name )
Flower.updateById = function(id,Flower,result){
    console.log("Updating a flower data, process started...");

       sql.query("UPDATE flowers SET title = ? WHERE id = ?", [Flower.title, id],function(err,res){

        if(err){
            console.log("error: "+err);
            //if error occured while getting response from data base
            //then forward error as the result to the calling function
            result(null,err);
        }
        else{
            console.log('updated Flower :'+res);
            result(null,res);
        }
    });
};

//function to remove a flower by id:
Flower.remove = function(id, result){

    console.log("Deleting a flower data, process started...");

     sql.query("DELETE FROM flowers WHERE id = ?", [id],function (err, res){

                     if(err) {
                       console.log("error: ", err);
                       result(null, err);
                     }
                     else{
                         console.log("Deleted flower with id "+id);
                       result(null, res);
                     }
            }); 
};

//exporting the flower module
//so as to call its function
module.exports=Flower;