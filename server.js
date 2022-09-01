const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//import routs
 const postRouts = require("./routes/post");

//import middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
 app.use(postRouts);


const PORT = 8000;

 const DB_URL = "mongodb+srv://heshan:658246@mernapp.2s6r1s9.mongodb.net/merncrud?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("DB connected Unsuccessfull",err)
})

app.listen(PORT, () =>{
    console.log('server is running on {$PORT}')
});