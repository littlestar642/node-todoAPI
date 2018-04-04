var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/users');

var app= express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    })

    todo.save().then((doc)=>{
        res.send(doc);
    },(r)=>{
        res.status(400).send(r);
    })
})


app.listen(3000,()=>{
    console.log('Listening at port 3000');
})








