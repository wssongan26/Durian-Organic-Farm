const express = require("express");
const path = require("path");
const app = express();
const mime = require('mime');


//call css and js files
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"public","html","index.html"));
})

const server = app.listen(5020);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);