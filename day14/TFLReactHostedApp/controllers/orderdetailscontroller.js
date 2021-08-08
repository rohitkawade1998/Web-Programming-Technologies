//a Separate responsibility  for  Flowers  HTTP request handling

var Orderdetails = require("../dal/orderdetailsdal");

exports.getAll = function (req, res) {
  console.log("calling order details controller function");
  Orderdetails.getAllOrderdetails(function (err, order) {
    if (err) res.send(err);
    res.send(order);
  });
};

exports.insert = function (req, res) {
  var new_order = new Orderdetails(req.body);
  

  //handles null error
  if (!new_order.orderdetailsid) {
    res
      .status(400)
      .send({ error: true, message: "Please provide customer id" });
  } else {
     Orderdetails.createOrderdetails(new_order, function (err, order) {
      if (err) 
      {
      res.send(err);
      }
      else{
      res.json(order);
      console.log(new_order);
      }
    });
  }
};

exports.getBy = function (req, res) {
  Orderdetails.getOrderdetailsById(req.params.id, function (err, order) {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.update = function (req, res) {
  Orderdetails.updatedetailsById(req.params.id, new Orderdetails(req.body), function (err, order) {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.remove = function (req, res) {
  Orderdetails.removedetails(req.params.id, function (err, order) {
    if (err) res.send(err);
    res.json({ message: "Order details successfully deleted with id "+req.params.id });
  });
};
