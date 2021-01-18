const express = require('express');   // conected to express

const app = express();                   // create object app

const port = 3000;		           // define a handler for the "/" route

app.use(express.static(__dirname + "/templates"));
 
app.use("/", (req, res, next) =>
     
    res.send("index.html, help.html"));
 
app.listen(port);

console.log("app running on: http://localhost:",port);

