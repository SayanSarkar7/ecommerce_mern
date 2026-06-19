const express = require("express");
const errorMiddleware = require("./middleware.js/error");

const app = express();
console.log(app.get("query parser"));
app.set("query parser", "extended");
app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
