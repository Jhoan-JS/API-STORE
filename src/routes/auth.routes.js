const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.json("auth");
});

module.exports = Router;
