const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../model/userModel");

exports.protect = catchAsync(async (req, res, next) => {
  //get token and check if it is there.
  let token;
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
  }
  if (!token) {
    return next(
      new ApiError("you are not logged in,please do log in to get access", 401)
    );
  }
  //token verification...
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );
  console.log(decoded);
  //check if the user exist
  const freshUser = await User.findById(decoded.id);
  console.log(freshUser);
  if (!freshUser) {
    return next(
      new ApiError("user associated with the given token is not found", 401)
    );
  }
  //console.log("hello i am here");
  //check if the password is changed or not..
  //   if (freshUser.changePassword(decoded.iat)) {
  //     return next(new ApiError("password has been changed recently", 401));
  //   }
  //granting access to the protected routes.
  req.user = freshUser;
  next();
});
