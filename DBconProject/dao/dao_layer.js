const con=require("../utils/db_connection");
console.log("inside dao layer");

addCustomer = ({ name, address }) => {
    let sql = "insert into customers (name,address) values(?,?)";
    con.query(sql, [name, address], (err, result) => {
      if (err) throw err;
      console.log("Data inserted Successfully");
    });
  };
  
  function getCustomerById(uid) {
    sql = "select * from  customers where id=" + uid;
    return new Promise((resolve, reject) => {
      con.query(sql, (err, result) => {
        resolve(result);
      });
    });
  }
  
  module.exports = { addCustomer, getCustomerById };