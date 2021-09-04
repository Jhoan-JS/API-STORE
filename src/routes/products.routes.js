const Router = require("express").Router();
const { protect } = require("../controllers/authControllers");
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct
} = require("../controllers/productControllers");

Router.route("/").get(getProducts).post(protect, createProduct);

Router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = Router;
