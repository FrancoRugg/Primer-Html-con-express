const express = require("express");
const { dirname } = require("path");
const app = express();

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3000, ()=>{
console.log("Servidor andando en el punto 3000")
})

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})