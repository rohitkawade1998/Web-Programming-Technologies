var sql = require("./mysqlconnect");

var Orderdetails = function (Orderdetails) {
  this.orderdetailsid = Orderdetails.orderdetailsid;
  this.orderid = Orderdetails.orderid;
  this.flowerid = Orderdetails.flowerid;
  this.quantity = Orderdetails.quantity;
  
 
};
Orderdetails.createOrderdetails = function (newOrderdetails, result) {
  console.log("New Order to be added ");
  console.log(newOrderdetails);
  sql.query("INSERT INTO orderdetails SET ?", newOrderdetails, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

Orderdetails.getOrderdetailsById = function (orderdetailsid, result) {
  sql.query(
    "Select * from orderdetails where orderdetailsid = ? ",
    orderdetailsid,
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

Orderdetails.getAllOrderdetails = function (result) {
  console.log("Invoking dal getall Orders");

  sql.query("Select * from orderdetails", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Orders : ", res);
      result(null, res);
    }
  });
};

Orderdetails.updatedetailsById = function (id, Orderdetails, result) {
  sql.query(
    "UPDATE orderdetails SET orderid = ?,flowerid = ?,quantity = ? WHERE orderdetailsid = ?",
    [

      Orderdetails.orderid,
      Orderdetails.flowerid,
      Orderdetails.quantity,
      id
      
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

Orderdetails.removedetails = function (id, result) {
  sql.query("DELETE FROM orderdetails WHERE orderdetailsid = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Orderdetails;
