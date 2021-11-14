require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function(req,res){
    var email =req.body.email;
    var pass = req.body.password;
  
    var data = {
        "email":email,
        "password":pass,
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})


app.listen(3001, () => console.log("Server is running"));
