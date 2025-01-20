console.log("Hello World!");
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
app.get("/", (req, res) => {
    res.send("welcome to my mongoAPI")
});

app.post("/blogpost", (req, res) => {
    res.send("this is a postrequest")
});

mongoose.
connect("mongodb+srv://simon:123admin@simonsapi.ebu7p.mongodb.net/products-API?retryWrites=true&w=majority&appName=SimonsApi")
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
});