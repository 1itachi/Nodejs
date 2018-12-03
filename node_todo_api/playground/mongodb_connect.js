const {MongoClient, ObjectID} = require('mongodb');

let objectId = new ObjectID();

console.log(objectId);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MOngoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to create colection');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'zee',
    //     age: 19,
    //     location: 'bengaluru'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to create collection');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({

    //     name: 'zee',
    //     age: 19,
    //     location: 'bengaluru'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to create collection');
    //     }

    //     console.log(result.ops[0]._id);
    // })


    client.close();

})