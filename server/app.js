var express = require("express");
var app = express();
var index = require("./routes/index");
// var data = require("./routes/data");
var path = require("path");

app.set("port", (process.env.PORT || 3000));

// app.use("/data", data);
app.use("/", index);


app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
