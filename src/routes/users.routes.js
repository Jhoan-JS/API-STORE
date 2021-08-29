const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.json("user");
});

module.exports = Router;
