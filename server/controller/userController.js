const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  //console.log(req.body);
  // res.status(200).json({
  //   status: "success",
  //   message: "no signup mechanism implemented",
  // });

  const newUser = await User.create(req.body);
  console.log(newUser);
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    status: "success",
    token,
    data: {
      newUser,
    },
  });
  //  catch (err) {
  //   console.log(err);
  //   res.status(400).json({
  //     status: "error",
  //     error: err,
  //   });
  // }
});
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ApiError("enter your password or email", 400));
  const exist = await User.findOne({ email }).select("+password");
  console.log(exist);
  const isCorrect = await exist.checkPassword(password, exist.password);
  if (!exist || !isCorrect)
    return next(
      new ApiError("No user with such email address or incorrect password", 400)
    );

  const token = jwt.sign({ id: exist._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(200).json({
    status: "success",
    token,
  });
});
exports.getAllUsers = catchAsync(async (req, res, next) => {
  // res.status(200).json({
  //   status: "success",
  //   message: "no data added yet to this route",
  // });
  const users = await User.find();
  if (!users) return next(new ApiError("no user found", 400));
  res.status(200).json({
    status: "success",
    count: users.length,
    data: {
      users,
    },
  });
});

exports.getOneUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "no data added yet to this route too",
  });
};
exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {},
  });
};
