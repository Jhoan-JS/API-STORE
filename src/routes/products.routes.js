const Router = require("express").Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct
} = require("../controllers/productControllers");

Router.route("/").get(getProducts).post(createProduct);

Router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = Router;
