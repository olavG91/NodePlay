var express = require("express");
var app = express();
app.use(express.json());

app.get("/url", (request, response, next) => {
    response.send('Hello');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});