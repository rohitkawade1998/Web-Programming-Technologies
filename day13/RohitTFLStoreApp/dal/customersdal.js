//all the logic of firing the query will be written in this code

//Customers database CRUD operation

//importing the mysqlconnect module here

var sql = require("./mysqlconnect");

var Customer = function (Customer) {
  this.custid = Flower.custid;
  this.firstname = Customer.firstname;
  this.lastname = Customer.lastname;
  this.email= Customer.email;
  this.contactnumber = Customer.contactnumber;  
  
};
Customer.createCustomer = function (newCustomer, result) {
  console.log("New Customer to be added ");
  console.log(newCustomer);
  sql.query("INSERT INTO customers SET ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.getCustomerById = function (custid, result) {
  sql.query(
    "SELECT * FROM customers WHERE custid = ? ",
    custid,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall Customers");

  sql.query("SELECT * FROM customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Customers : ", res);
      result(null, res);
    }
  });
};

Customer.updateById = function (custid, Customer, result) {
  sql.query(
    "UPDATE customers SET firstname = ?,lastname = ?, email = ?, contactnumber = ?  WHERE custid = ?",
    [
      Customer.firstname,
      Customer.lastname,
      Customer.email,
      Customer.contactnumber,
      custid,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Customer.remove = function (custid, result) {
  sql.query(
    "DELETE FROM customers WHERE custid = ?",
    custid,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Customer;
