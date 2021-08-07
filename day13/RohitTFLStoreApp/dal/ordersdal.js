var sql = require("./mysqlconnect");

var Order = function (Order) {
  this.customerid = Order.customerid;
  this.orderdate = Order.orderdate;
  this.amount = Order.amount;
  this.orderid = Order.orderid;
 
};

Order.createOrder = function (newOrder, result) {
  console.log("New Order to be added ");
  console.log(newOrder);
  sql.query("INSERT INTO orders SET ?", newOrder, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      
      console.log(res.insertid);
    
      result(null, res);
      console.log("new order inserted  :) ");
    }
  });
};

Order.getOrderById = function (orderid, result) {
  sql.query(
    "Select * from Orders where orderid = ? ",
    orderid,
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

Order.getAllOrder = function (result) {
  console.log("Invoking dal getall Orders");

  sql.query("Select * from Orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Orders : ", res);
      result(null, res);
    }
  });
};

Order.updateById = function (orderid, Order, result) {
  sql.query(
    "UPDATE orders SET customerid = ?, orderdate = ?, amount = ? WHERE orderid = ?",
    [

      Order.customerid,
      Order.orderdate,
      Order.amount,
      orderid
      
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("flower details Updated :) ");
        result(null, res);
      }
    }
  );
};

Order.remove = function (orderid, result) {
  sql.query("DELETE FROM orders WHERE orderid = ?", orderid, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Order;
