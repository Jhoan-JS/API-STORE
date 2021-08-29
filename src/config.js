require("dotenv").config({ path: "./.env" });

// NODE_ENV = development
// PORT = 3000
// DATABASE_LOCAL = mongodb://localhost:27017/APIBLOG

//Enviroment
exports.NODE_ENV = process.env.NODE_ENV;

//MONGODB  URL
exports.MONGODB_URL = process.env.MONGODB_URL || "";

//PORT
exports.PORT = process.env.PORT || 3000;
