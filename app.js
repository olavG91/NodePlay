var express = require("express");
var app = express();
const cors = require("cors");
app.use(express.json());

app.get("/url", (req, res) => {
    res.send('This is wokring');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});