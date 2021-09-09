const Router = require("express").Router();
const { signUp, signIn } = require("../controllers/authControllers");

Router.route("/signup").post(signUp);
Router.route("/signin").post(signIn);
module.exports = Router;
