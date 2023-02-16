const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middlewares

app.use('/', (req, res, next)=>{
    res.send("This is our starting app")
})

mongoose.connect(
    "mongodb+srv://Admin_Anjana:Fe2QjyEA5LuutOiG@bookstore.bn8jmnk.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to DataBase"))
    .then(() =>{
        app.listen(5000)
    }).catch((err)=>console.log(err));




