const mysql=require("mysql2");

const con=mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"cdac@2024",
})

con.connect((err)=>{
    if(err) throw err;
    console.log("connection established");
})

let sql_db = "create database if not exists cdac_pune";
con.query(sql_db, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log("DATABASE Created");
});

let sql_use = "USE cdac_pune";
con.query(sql_use, (err, result) => {
  if (err) throw err;
  console.log("Database selected");
  
  // Then, create the table if it doesn't exist
  let sql_tb = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql_tb, (err, result) => {
    if (err) throw err;
    console.log("Table 'customers' created successfully");
  });
});


module.exports = con;
