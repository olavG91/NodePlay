var express = require("express");
var app = express();

app.get("/url", (request, respone, next) => {
    respone.json(
        {
            name: "asd"
        }
    );
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});