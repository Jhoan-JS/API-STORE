const dotenv = require("dotenv");

dotenv.config({ path: "../../.env" });
const fs = require("fs");
const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config");

const Product = require("../models/Product");

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

//Read json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Product.create(products);
    console.log("Data succesfully loaded!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany(products);
    console.log("Data succesfully deleted!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
