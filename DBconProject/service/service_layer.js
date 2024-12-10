const { addCustomer, getCustomerById } = require("../dao/dao_layer");

function addServiceCustomer(name, address) {
  let u_name = name.toUpperCase();
  let u_address = address.toUpperCase();
  cust_data = { name: u_name, address: u_address };
  addCustomer(cust_data);
}
//addServiceCustomer("akh", "bihar");

function getServiceCustomerById(id) {
  return getCustomerById(id);
}

module.exports = { addServiceCustomer, getServiceCustomerById };
