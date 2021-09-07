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
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    //Send error message
  }

  const validPassword = await user.comparePassword(password);

  if (!validPassword) {
    //Send Error message
  }

  const token = jwt.sign({ user: user.id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN
  });

  res.json({
    auth: true,
    user,
    token
  });
};

exports.signUp = async (req, res) => {
  const newUser = new User(req.body);

  newUser.password = await newUser.encryptPassword(req.body.password);
  await newUser.save();

  const token = jwt.sign({ user: newUser._id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN
  });

  res.json({
    auth: true,
    newUser,
    token
  });
};
