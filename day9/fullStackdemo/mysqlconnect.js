// Implementation for MySQL Database Connectivity
// mysql module to be imported
// Database Connectivity
//Step 1: Create Connection
//step 2: Connect to database connection
//step 3: Define SQL Query
//step 4: Send SQL Query to MySQL
//step 5: OnReceive Result collect data and display data


//a Separate responsibility  for  mysql connection string
// database connectivity
 
var mysql= require('mysql');
//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1169',
    database:'tflstore'
});

connection.connect(function(err){
    if(err) throw err;
});

//Export connection from mysqlconnect.js
module.exports=connection; 

