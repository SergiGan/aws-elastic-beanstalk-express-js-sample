const express = require('express');   // conected to express on port 3000

const app = express();                   // create object app

const port = 8081;		           // define a handler for the "/" route  - 8080
//test to manual approve 
const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
dateTime = date+' at '+time;

app.use(express.static(__dirname + "/templates"));
 
app.get("/templates", (req, res, next) =>  // used static page
     
    res.send("index.html, help.html"));
 
app.listen(port);

console.log(`App started on http://localhost:`, 'on', port, ',' , dateTime ); // ! or simple use full Date()
