const Router = require("express").Router();
const { signUp } = require("../controllers/authControllers");

Router.route("/signup").post(signUp);

module.exports = Router;
