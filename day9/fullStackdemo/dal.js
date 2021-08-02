// File to perform database level table CRUD Operations against customers table.

//importing connection module to fire querry:  
var connection=require('./mysqlconnect');

//Add insert, update, remove, getAll, getById functions to implement database CRUD operations.

//getAll
var getAll=function(){
    var query="select * from customers";
   connection.query(query,function(err,data){
       if(err){
           console.log("err: "+err);
       }
       {
           console.log(data);
       }
   });

};

//getById
var getById=function(id){
    var query="select * from customers where custid="+id;
   connection.query(query,function(err,data){
       if(err){
           console.log("err: "+err);
       }
       {
           console.log(data);
       }
   });

};

//insert
var insert=function(firstname,lastname,email,contactnumber){
    var query="insert into customers values(default,'"+firstname+"','"+lastname+"','"+email+"',"+contactnumber+")";
   connection.query(query,function(err,data){
       if(err){
           console.log("err: "+err);
       }
       {
           console.log(data);
       }
   });

};

//update
var update=function(id,firstname,lastname,email,contactnumber){
    var query="update customers set firstname='"+firstname+"',lastname='"+lastname+"',email='"+email+"',contactnumber="+contactnumber+" where custid="+id;
   connection.query(query,function(err,data){
       if(err){
           console.log("err: "+err);
       }
       {
           console.log(data);
       }
   });

};

//remove
var remove=function(id){
    var query="delete from customers where custid="+id;
   connection.query(query,function(err,data){
       if(err){
           console.log("err: "+err);
       }
       {
           console.log(data);
       }
   });

};


 getAll();

//getById(2);

//insert('RANJAN','WANDARE','ranjan@gmail.com',9864132788);

//update(4,'SHRUJAN','MAHAJAN','mahajans@gmail.com',9867892788);

//remove(4);






