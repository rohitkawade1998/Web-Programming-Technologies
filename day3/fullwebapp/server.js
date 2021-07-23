//simple (full)http web application
//we have created a html file: index.html, which we will send as a response to a browsers request
//now we are writing the server side logic to get the request, process it and send response to the browser.

var http=require('http'); //step1
var fs=require('fs');  //step6 

var onRequestHandler=function(request,response)  //step5
{
    var filePath="./"+request.url; //concataning . with the file name coming from browser to make it a filepath
    //now we will read the fle so we need to use fileRead() from fs module 
    //so we need to import the fs module
    fs.readFile(filePath,(err,data)=>{
        if(err)
        {
            console.log("Something Went Wrong !!!"); //server side error displaying
            console.log(err);

            //now displaying error message on the browser side also:
            response.writeHead(404,{'Content-Type':'text/html'}); 
            //without this nothing will be displayed at the browser if any error occured while reading the html file
            //404 is a error response code.  
        }
        else
        {  //if everything goes fine then display the html file's data at the browser
            console.log("SuccessFull read the file :)"); //server side output display
            response.writeHead(200,{'Content-Type':'text/html'}); //browser side output display
            response.write(data.toString());
        }
        response.end();
    });
};

//creating a server and giving a call back function var as argument to it.
var server=http.createServer(onRequestHandler); //step2

server.listen(8989);  //step3: Server listening on port no. 8989

console.log("Server listening on port no. 8989");  //step4
//launch the server from command prompt and display this msg on server side (cmd output)


//index.html is our home page
//url from the browser is: http://localhost:8989/index.html