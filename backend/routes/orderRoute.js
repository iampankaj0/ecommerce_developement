const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../moddleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  deleteOrderByUser,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router.route("/order/delete/:id/:userId").delete(isAuthenticatedUser, deleteOrderByUser);

router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"), getAllOrders);

router.route("/admin/order/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateOrder);

router.route("/admin/order/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteOrder);


module.exports = router;