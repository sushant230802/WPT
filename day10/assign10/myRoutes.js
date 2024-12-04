var express=require("express");
var router=express.Router();
router.use(express.json());

employees=[{id:1,Name:"Rahul",City:"Mumbai"},
    {id:2,Name:"Rahi",City:"pune"},
    {id:3,Name:"Rahu",City:"chandigarh"}]
    
router.get("/",(req,res)=>{
        res.send(employees);
})

router.get("/emp/:id",(req,res)=>{
    idValue=req.params.id;
    console.log(idValue);
    
    flag=false;
    for(e in employees){
        if(employees[e].id==idValue){
            res.send(employees[e]);
            flag=true;
            break;
        }
    } 
    console.log(flag);
    
    if(flag==false){
        res.send("employee id doesnt exist")
    }
})

router.post("/addemp",(req,res)=>{
    e=req.body;
    employees.push(e);
    res.send("employee added successfully")
})

router.put("/updateEmp/:id",(req,res)=>{
    idValue=req.params.id
    const {newName,newCity} = req.body;
    flag=false;
    for(e in employees){
        if(employees[e].id==idValue){
            employees[e].Name=newName;
            employees[e].City=newCity;
            flag=true;
            break;
        }
    } 
    res.send("updated successfully")
    console.log(flag);
    
    if(flag==false){
        res.send("employee id doesnt exist")
    }
})

router.delete("/delete/:id",(req,res)=>{
    idValue=req.params.id;
    const index=employees.findIndex(emp=>emp.id==idValue);
    if(index!==-1){
    employees.splice(index,1);
    res.send("deletion successfully")
    }
    else{
        res.send("employee id doesnt exist");
    }
})
//In JavaScript, destructuring assignment requires the
//variable declaration to work properly (such as with 
//const, let, or var). In your case, 
//({Name, City}) = req.body; will throw an error because you're 
//attempting to destructure without declaring Name and City.
module.exports=router;