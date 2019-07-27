const express = require("express");
const pizzaRouter = require("./routers/pizza.router");

const app = express();

app.get("/", (req, res, next) => {
  res.json("hello world");
});

app.use("/pizzas", pizzaRouter);

module.exports = app;
