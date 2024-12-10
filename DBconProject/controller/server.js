const express=require("express");
const app=express();

app.use(express.json())

const{addServiceCustomer,
    getServiceCustomerById}=require("../service/service_layer")

app.set("view engine", "ejs");

app.post("/testing", (req, res) => {
    res.render("displaydata", { uname: "akshay" });
});    

app.post("/newuser", (req, res) => {
    let uname = req.body.uname;
    let address = req.body.address;
    console.log(uname + address);
    addServiceCustomer(uname, address);
    res.send("Done");
  });

  app.get("/userid/:id", (req, res) => {
    let uid = req.params.id;
    getServiceCustomerById(uid).then((data) => {
      res.send(data);
    });
  });
  
  app.listen(2222);
  console.log("Server Started");  