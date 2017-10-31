'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  Cart = mongoose.model('Carts');
  exports.list_all_users = function(req, res) {
    user.find({}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
exports.list_all_carts = function(req, res) {
  Cart.find({}, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.create_a_cart = function(req, res) {
  var new_cart = new Cart(req.body);
  new_cart.save(function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.read_a_cart = function(req, res) {
  Task.findById(req.params.cartId, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
exports.update_a_cart = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.cartId}, req.body, {new: true}, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};
// exports.update_a_cart = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.cartId}, req.body, {new: true}, function(err, cart) {
//     if (err)
//       res.send(err);
//     res.json(cart);
//   });
// };
      



exports.delete_a_user = function(req, res) {
  user.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
// exports.delete_a_cart = function(req, res) {
//   Task.remove({
//     _id: req.params.cartId
//   }, function(err, cart) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Cart_Product successfully deleted' });
//   });
// };