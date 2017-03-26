var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send("Hi Hi HI");
})


app.listen(PORT, function(){
  console.log("Listening on port " + PORT);
})