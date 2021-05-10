const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');

app.get('/',function(req,res){
    //res.send('<h2>Just testing.<h2>');
    fs.readFile('./healthform.html',function(err,data){
        if(err)
        {
            console.log('error',err);
            return res.end('<h2>Error!<h2>');
        }
        return res.end(data);
    });
});

app.listen(port,function(err)
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Server is up and running on the port: ",port);
});
