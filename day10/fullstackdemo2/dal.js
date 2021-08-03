
// Implementation for MySQL Database Connectivity
// mysql module to be imported
// Database Connectivity
//Step 1: Create Connection
//step 2: Connect to database connection
//step 3: Define SQL Query
//step 4: Send SQL Query to MySQL
//step 5: OnReceive Result collect data and display data
var sql=require('./mysqlconnect'); //importing connection object for mysql connectivity



//getAll
var getAll=function(){
    var query="select * from customers";
   sql.query(query,function(err,data){
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
   sql.query(query,function(err,data){
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
    sql.query(query,function(err,data){
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
   sql.query(query,function(err,data){
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
   sql.query(query,function(err,data){
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