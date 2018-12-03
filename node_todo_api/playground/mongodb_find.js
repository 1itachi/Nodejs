const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MOngoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed:true}).toArray().then((res)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err)=>{
    //     console.log(err);
    // })

    db.collection('Users').find({name:'zee'}).count().then((count)=>{
        console.log(`there are ${count} number of names`);
    }, (err)=>{
        console.log(err);
    });
   client.close();
})