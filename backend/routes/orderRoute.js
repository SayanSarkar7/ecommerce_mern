const express = require("express");
const { isAuthenticated, authorizeRoles } = require("../middleware.js/auth");
const { newOrder, getSingleOrder, myOrder } = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);
router.route("/order/:id").get(isAuthenticated,getSingleOrder);
router.route("/orders/me").get(isAuthenticated,myOrder);




module.exports = router;
