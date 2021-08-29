exports.getProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    result: "xxx",
    data: "products"
  });
};

exports.getProduct = (req, res) => {
  res.status(200).json({
    status: "success",

    data: "product"
  });
};

exports.createProduct = (req, res) => {
  res.status(201).json({
    status: "success",

    data: "new product"
  });
};

exports.updateProduct = (req, res) => {
  res.status(200).json({
    status: "success",

    data: "updated product"
  });
};

exports.deleteProduct = (req, res) => {
  res.status(204).json({
    status: "success",

    data: "null"
  });
};
