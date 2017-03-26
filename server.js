var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'eat something',
  completed: false
}, {
  id: 2,
  description: 'go shopping',
  completed: false
},{
  id: 3,
  description: 'visit Mickey',
  completed: true
}]

app.get('/', function(req, res){
  res.send("Hi Hi HI");
})

//GET /todos
app.get('/todos', function(req, res){
  res.json(todos);
});

//GET /todo/:id
app.get('/todo/:id', function(req,res){
  var todo_id = req.params.id;
  var todo = todos.filter(function(obj){
    return obj.id == todo_id;
  })
 

  if (todo.length == 0){
    console.log("TODO not found");
    res.status(404).send();
    return;
  }

  console.log("todo found");
  res.json(todo[0]);
})


app.listen(PORT, function(){
  console.log("Listening on port " + PORT);
})
