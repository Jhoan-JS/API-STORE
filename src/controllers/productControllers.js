const Product = require("../models/Product");
const ProductSchema = require("../libs/productValidator");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      result: products.length,
      data: { products }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: { product }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const validateResult = await ProductSchema.validateAsync(req.body);
    console.log(validateResult);
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",

      data: { newProduct }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: { updatedProduct }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete({ _id: req.params.id });

    res.status(204).json({
      status: "success",

      data: "null"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
    });
  }
};
