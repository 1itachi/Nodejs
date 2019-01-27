var bodyParser = require('body-parser');
var express    = require('express');

var mongoose = require('./db/mongoose').mongoose;
var Todo     = require('./models/todo').Todo;
var users    = require('./models/users').user;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res)=>{
  var todo = new Todo({
      text: req.body.text
  });
  todo.save().then((doc)=>{
        res.send(doc);
  }, (e)=>{
      res.status(400).send(e);
  });
});

app.get('/todos', (req,res)=>{
    Todo.find().then((doc)=>{
        res.send(doc);
    }, (e)=> {
        res.status(400).send(e);
    });
});

// '/todos/:id'
app.get('/todos/:id', (req,res)=>{
    res.send(req.params);
})

app.listen(3000, ()=>{
    console.log('listening to port 3000');
})

module.exports = {app};
