const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MOngoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');



    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5c06596852402d1a91dd5c37')
    // },
    // {
    //     $set :{
    //         completed: 'true'
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result)=>{
    //     console.log(result);
    //     console.log('-------------------------------------------------');
    // });


    // db.collection('Users').insertOne({
    //     name: 'Something to do',
    //     age: 16,
    //     completed: false
    // }, (err,result)=>{
    //     if(err){
    //         return console.log('Unable to create colection');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log('-----------------------------------------------------');
    // });

    // db.collection('Users').

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c076fb8e598fc2e92ef0f04')
    },
        {
            $set: {
                name: 'abc'
            },
            $inc: {
                age: 20
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })


    client.close();
})