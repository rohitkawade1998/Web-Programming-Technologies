var express=require('express');
var path=require('path');

const app=express();
//configure piblic folder as static folder to express module:
var staticMiddleware=express.static(path.join(__dirname,"public"));

app.use(staticMiddleware);

app.get("/",(req,res)=>{
    res.sendFile(staticMiddleware+'/index.html');
});

app.listen(9080);
console.log("website is hosted on port no. 9080")