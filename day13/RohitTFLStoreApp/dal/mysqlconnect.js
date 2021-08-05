//In this file we will write the code for connecting the server with the database
//Remote Connection
//database connecrtivity

//importing the sql module
var mysql= require('mysql');

//defining connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1169',
    database:'tflstore'
});

//establishing the connection using connect function
connection.connect(function(err){
    if(err) throw err;
});

//export the connection module 
module.exports=connection;