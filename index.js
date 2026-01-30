const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongoose.connect("mongodb://localhost:27017/AuthAndAuth")
.then(() => {console.log("MongoDB Connected")})

app.use("/", router);


app.listen(port, () => {
    console.log("Server Stared");
})