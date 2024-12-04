var express=require("express");
var app=express();
app.use(express.json());

var routes=require("./myRoutes");

app.use("/rt",routes);
app.listen(4444);
console.log("server started at 4444")