let express = require('express');
let app = express();
let mongoU = 'mongodb+srv://naresh:raju1998@cluster0.xr9q3.mongodb.net/mydb?retryWrites=true&w=majority';
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let db;
let port = process.env.PORT;

app.get('/',(req,res)=>{
    db.collection('city').find({}).toArray((err,rst)=>{
        if(err) throw err;
        res.send(rst);
    })
})



MongoClient.connect(mongoU,(err,connectfromurl)=>{
    if(err) throw err;
    db = connectfromurl.db('mydb');
    app.listen(port, (err)=>{
        if(err) throw err;
    })
        
})
