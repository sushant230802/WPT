var express=require("express")
var router=express.Router()
router.use(express.json())

router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.htm")
})

router.get("/display",(req,res)=>{
    let ff=req.query.fname;
    res.send("Display page "+ff);
})

router.get("/fname/:fname/lname/:lname", (req, res) => {
    res.send(
      "<h1>Welcome to Express Server GET 1" +
        req.params.fname +
        " " +
        req.params.lname
    );
  });

module.exports=router;