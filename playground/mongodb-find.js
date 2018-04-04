const {MongoClient,ObjectID} = require('mongodb');
var  obj=new ObjectID();


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        console.log('Unable to connect to mongo db server');
        return;
    }
    console.log('Connected to mongoDb');
    const db=client.db('TodoApp');  
    // db.collection('Todos').insertOne({
    //     text:"something",
    //     completed:false
    // },(err,result)=>{
    //     if(err)return console.log('Unable to insert');
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })
    db.collection('Users').find({
        age:12,location:'India'
    }).count().then((count)=>{
        console.log(count);
    });
    client.close();
});