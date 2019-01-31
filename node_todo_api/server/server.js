var bodyParser = require('body-parser');
var ObjectId   = require('mongodb').ObjectId;
var express    = require('express');

var mongoose = require('./db/mongoose').mongoose;
var Todo     = require('./models/todo').Todo;
var users    = require('./models/users').user;

var app = express();
const port = process.env.PORT|| 3000;

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
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
        return  res.status(404).send('invalid id!');
    }
        Todo.findById(id).then((todo)=>{
            if(!todo){
              return  res.status(404).send('record not found!!');
            }else{
                return res.send(todo);
            }
        }).catch((e)=>{
           res.status(400).send(e); 
        })  
})

app.listen(port, ()=>{
    console.log(`started on port ${port}`);
})

module.exports = {app};
