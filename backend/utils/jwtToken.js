// Create Token and Save in Cookie

const sendToken = (user, statusCode, res, message="Login Successful") => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message:message,
    token: token,
    user: user,
  });
};

module.exports = sendToken;
