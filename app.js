let express = require('express');
let app = express();
let mongoD = require('mongodb');
let mongoC = mongoD.MongoClient;
let mongoU ='mongodb+srv://naresh:raju1998@cluster0.xr9q3.mongodb.net/mydb?retryWrites=true&w=majority'
let port = process.env.PORT;
let db;
let cors = require('cors');

app.use(cors({
  origin: 'https://nareshrazu.herokuapp.com/'
}));



app.get('/',(req,res)=>{
    db.collection('city').find({}).toArray((err,rst)=>{
        if(err) throw err;
        res.send(rst);
    })
})

mongoC.connect(mongoU,(err,con)=>{
    if(err) throw err;
    db = con.db('mydb');
    app.listen(port, (err)=>{
        if(err) throw err;
    })
});
