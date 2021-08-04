
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

module.exports=connection;
//what means database server should be on to use data?
