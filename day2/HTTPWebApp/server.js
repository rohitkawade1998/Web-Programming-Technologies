//creating a http web server application

var http=require("http"); //using http inbuilt module,storing ref to http variable
var server=http.createServer(); //usinh http var calling to inbulit function createServer() ans storing ref to server var
server.listen(9999); //calling to listen function with giving argument as port number where the server need to listen
console.log("listening on port no 9999"); //showing this output