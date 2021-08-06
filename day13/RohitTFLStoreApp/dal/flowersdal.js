//all the logic of firing the query will be written in this code

//Flowers database CRUD operation

//importing the mysqlconnect module here
var sql=require('./mysqlconnect');

//model
//object oriented approach
//define Model

//creating a Flower function :
var Flower=function(Flower){
    //constructor:
    this.Id=Flower.Id;
    this.Title=Flower.Title;
    this.Description=Flower.Description;
    this.UnitPrice=Flower.UnitPrice;
    this.Quantity=Flower.Quantity;
    this.ImageUrl=Flower.ImageUrl;

};

//creating functions such that when they will be called respective query will be fired
//Attach member function Model to perform Database CRUD operations:
//here result is the call back function
//newFlower is the Json object passed from the calling function
Flower.createFlower = function(newFlower,result){
    console.log("New flower adding process started...");
    //console.log(newFlower);

    let queryy="insert into flowers values(" +newFlower.id+",'"+newFlower.title+"','"+newFlower.description+"','"+newFlower.unitprice+"',"+newFlower.imageurl+"','"+newFlower.quantity+"','"+newFlower.likes+")";
    sql.query(querry,function(err,res){
        if(err){
            console.log("error: "+err);
            result(err,null);
        }
        else{
                  console.log(res.insertId);
                  result(null,res.insertId);
        }

    });
};


//function to display all flowers details:
Flower.getAllFlower=function(result){
    console.log("Displaying all flowers data, process started...");

         let queryy="select * from flowers";
    sql.query(queryy,function(err,res){

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
Flower.getFlowerById()=function(FlowerId,result){
    console.log("Get flower by ID, process started...");

     let queryy="select * from flowers where id ="+FlowerId;
    sql.query(queryy,function(err,res){
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

     let queryy="update flowers set title = "+Flower.title+" where Id = "+id;
    sql.query(queryy,function(err,res){

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

     let queryy="delete from flowers where id = "+id;
    sql.query(queryy,function (err, res){

                     if(err) {
                       console.log("error: ", err);
                       result(null, err);
                     }
                     else{
                       result(null, res);
                     }
            }); 
};

//exporting the flower module
//so as to call its function
module.exports=Flower;