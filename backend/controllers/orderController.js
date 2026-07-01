const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware.js/catchAsyncErrors");

// Create New Order
exports.newOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItem,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItem,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    stccess: true,
    message: "Order Created Successfully",
    order: order,
  });
});

// Get Single Order
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email",
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id.", 404));
  }
  res.status(200).json({
    success: true,
    order: order,
  });
});

// Get LoggedIn user Orders
exports.myOrder = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({user: req.user._id});

  if (!orders) {
    return next(new ErrorHandler("No order found.", 404));
  }
  res.status(200).json({
    success: true,
    orders: orders,
  });
});
