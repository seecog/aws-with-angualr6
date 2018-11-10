var express = require("express");

var app = express();

app.use(express.static(__dirname+"/dist/eshop"))


app.listen(5000,function(){
    console.log('Server starts')
})
