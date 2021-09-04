const jwt = require("jsonwebtoken");
const { JWT_EXPIRES_IN, JWT_SECRET_KEY } = require("../config");
const User = require("../models/Users");

exports.protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
  }

  if (!token) {
    const err = new Error(
      "You not are logged in. Please log in to get access."
    );
    err.status = "fail";
    err.statusCode = 401;

    next(err);
  }

  req.token = token;
  next();
};

exports.signIn = async (req, res) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ user: user._id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN
  });

  res.json({
    user,
    token
  });
};
