const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book_routes")
const app = express();

//middlewares
app.use(express.json());
app.use("/books", router)//http://localhost:5000/books


mongoose.connect(
    "mongodb+srv://Admin_Anjana:Fe2QjyEA5LuutOiG@bookstore.bn8jmnk.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to DataBase"))
    .then(() =>{
        app.listen(5000)
    }).catch((err)=>console.log(err));




