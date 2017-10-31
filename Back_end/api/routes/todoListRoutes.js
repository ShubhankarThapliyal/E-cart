'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/users')
    .get(todoList.list_all_user)
    .post(todoList.create_a_user);


  app.route('/users/:userId')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);
  
  app.route('/carts')
    .get(todoList.list_all_carts)
    .post(todoList.create_a_cart);

}
//   app.route('/carts/:cartId')
//     .get(todoList.read_a_carts)
//     .put(todoList.update_a_cart)
//     .delete(todoList.delete_a_cart);
// };