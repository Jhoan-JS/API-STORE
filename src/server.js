const express = require("express");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");
const productsRoute = require("./routes/products.routes");
const usersRoute = require("./routes/users.routes");
const authRoute = require("./routes/auth.routes");
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
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);

//Unhandle routers

app.use("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message
  });
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
