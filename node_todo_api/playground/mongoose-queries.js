const ObjectId = require('mongodb').ObjectID;

const mongoose = require('./../server/db/mongoose').mongoose;
const user    = require('./../server/models/users').user;
var id = '5c473d363a8dfaedbfdd72785';

// user.find({
//     _id : id
// }).then((todos)=>{
//  console.log(todos);
// });

// user.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log(todo);
// });

if(!ObjectId.isValid(id)){
    console.log('ID is not valid');
}

user.findById(id).then((todo)=>{
    if(!todo){
       console.log('No record found!!');
    }else{
        console.log(todo);
    }
}).catch((e)=>{
    console.log(e.message);
})


