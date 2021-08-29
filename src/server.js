const express = require("express");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");
const productsRoute = require("./routes/products.routes");
const usersRoute = require("./routes/users.routes");
//Initializations
const app = express();
require("./config/mongoose");
//Settings

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Routes
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/users", usersRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
