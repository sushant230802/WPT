employees=[]; //initialize an empty array
function addData(){
    let id=document.getElementById("id").value
    let fname=document.getElementById("fname").value
    let city=document.getElementById("city").value
    emp={id,fname,city}

    for(e of employees){
        if(e.id==id){
            document.getElementById("notallowed").innerText="ID ALREADY EXISTS"
            document.getElementById("id").value=""
            document.getElementById("fname").value=""
            document.getElementById("city").value=""
            return;
        }
    }
    employees.push(emp);

     // Clear the input fields
    document.getElementById("id").value=""
    document.getElementById("fname").value=""
    document.getElementById("city").value=""

    // for(e in employees){
    //     console.log(employees[e])
    // }
    console.log(employees)
    console.log(employees.length)
    countEmployees()
}
function countEmployees(){
    x=document.getElementById("count")
    x.innerText=employees.length
    
 }
function deleteRecord(id,row){
    const index=employees.findIndex(emp=>emp.id===id)
    employees.splice(index,1);//delete that employee from array
    row.innerHTML="";//delete thst row from table
    document.getElementById("count").innerText=employees.length;
    console.log(employees)
}

function displayData(){
    document.getElementById("display").innerHTML=
    "<tr><th>ID</th><th>Name</th><th>City</th><td>Action</td>"
    for(e of employees){
        document.getElementById("display").innerHTML+=
        `<tr><td>${e.id}</td><td>${e.fname}</td><td>${e.city}</td>
        <td><button onclick="deleteRecord(e.id,this.parentNode.parentNode)">Delete</button</td>`
    }
} 
