module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
// This is equivalent to:

// function catchAsyncErrors(theFunc) {
//   return function(req, res, next) {
//     Promise.resolve(theFunc(req, res, next)).catch(next);
//   };
// }

// module.exports = catchAsyncErrors;

// The outer function receives a route handler (theFunc) and returns a new middleware function.


// that means catchAsyncError function is returning a function which is executing a promise