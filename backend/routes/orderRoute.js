const express = require("express");
const { isAuthenticated } = require("../middleware.js/auth");
const { newOrder } = require("../controllers/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);

module.exports = router;
