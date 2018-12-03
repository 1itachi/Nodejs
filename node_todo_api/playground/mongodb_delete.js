const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MOngoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    
    //delete many
    // db.collection('Users').deleteMany({name:'zee'}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log(err);
    // });

    //deleteOne
    // db.collection('Users').deleteOne({age:19}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log(err);
    // });

    //findOneandDelete
    // db.collection('Users').findOneAndDelete({age:19}).then((res)=>{
    //     console.log(res);
    // })

    //from todos collection
    db.collection('Todos').deleteMany({name:'zee'}).then((res)=>{
        console.log(res);
    });

    //to delete based on id
    db.collection('Todos').deleteOne({_id: new ObjectID('5c04f20f4c0f5693c2f017d7')}).then((res)=>{
        console.log(res);
    })


   client.close();
})