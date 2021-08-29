const mongoose = require("mongoose");
const { MONGODB_URL } = require("../config");

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

module.exports = mongoose;
