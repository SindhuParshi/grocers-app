// load all modules
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let userRouter = require("./router/user.router")
let productRouter = require("./router/product.router");

let url = "mongodb://localhost:27017/meanbatch1";

//create the express reference
let app = express();

//all middleware
app.use(cors());
app.use(express.json());

//connect the database
mongoose.connect(url).then(res=>console.log("Connected")).catch(err=>console.log(err));

//match main path
//http://localhost:9090/api/product/*
app.use("/api/user",userRouter);
app.use("/api/product",productRouter)

app.listen(9090,()=>console.log("Server running on port number 9090")); 