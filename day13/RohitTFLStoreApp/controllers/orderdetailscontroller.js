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
  console.log(new_order);

  //handles null error
  if (!new_order.customerid) {
    res
      .status(400)
      .send({ error: true, message: "Please provide customer id" });
  } else {
     Orderdetails.createOrderdetails(new_order, function (err, order) {
      if (err) res.send(err);
      res.json(order);
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
  Orderdetails.updatedetailsById(req.params.id, new Order(req.body), function (err, order) {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.remove = function (req, res) {
  Orderdetails.removedetails(req.params.id, function (err, order) {
    if (err) res.send(err);
    res.json({ message: "Flower successfully deleted" });
  });
};
