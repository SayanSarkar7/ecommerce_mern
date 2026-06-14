const { stack } = require("../app");
const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
    // console.log(err.statusCode);
    
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    error: err,
    errMsg:err.message,
    stack:err.stack
  });
};
