const { stack } = require("../app");
const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  // console.log(err.statusCode);

  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB Id error
  if (err.name == "CastError") {
    const message = `Resourse not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  // Mongoose Duplicate Key Error
  if (err.code == 11000) {
    const message = `Deplicate: ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }
  // Wrong JWT Error
  if (err.name == "JsonWebTokenError") {
    const message = `JSON Web Token is invalid, try again.`;
    err = new ErrorHandler(message, 400);
  }
  // JWT Token Expired Error
  if (err.name == "TokenExpiredError") {
    const message = `JSON Web Token is expired, try again.`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err,
    errMsg: err.message,
    stack: err.stack,
  });
};
