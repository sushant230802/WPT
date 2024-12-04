var express=require("express");
var app=express();
app.use(express.json())

var routes=require("./myRoutes")

app.use("/rt",routes);

app.listen(2222);
console.log("Server started");