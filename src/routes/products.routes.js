const Router = require("express").Router();
const { protect, restrictTo } = require("../controllers/authControllers");
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct
} = require("../controllers/productControllers");

Router.route("/")
  .get(protect, getProducts)
  .post(protect, restrictTo("admin"), createProduct);

Router.route("/:id")
  .get(getProduct)
  .put(protect, restrictTo("admin"), updateProduct)
  .delete(protect, restrictTo("admin"), deleteProduct);

module.exports = Router;
