const Router = require("express").Router();
const { signIn } = require("../controllers/authControllers");

Router.route("/signin").post(signIn);

module.exports = Router;
