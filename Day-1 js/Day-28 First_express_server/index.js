const express = require('express');
//create an express app object by calling the express function
const app = express();
const PORT = 7892;

app.get('/', function(req,res){
    res.send("Hello world");
});
app.post('/home', function(req,res){
    res.send("Welcome to home");
});
app.patch('/', function(req,res){
    res.send("This is a Patch request");
});

app.listen(PORT, function process(){
    console.log("server started");
});