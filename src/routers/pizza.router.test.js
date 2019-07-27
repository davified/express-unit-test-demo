const express = require("express");
const request = require("supertest");
const pizzaController = require("../controllers/pizza.controller");

describe("Pizza Router", () => {
  let app;
  let pizzaRouter;
  beforeEach(() => {
    app = express();

    jest
      .spyOn(pizzaController, "list")
      .mockImplementation((req, res, next) => res.json("listing pizzas"));

    jest
      .spyOn(pizzaController, "show")
      .mockImplementation((req, res, next) => res.json("showing single pizza"));

    pizzaRouter = require("./pizza.router"); // we *have to* require pizzaRouter after the mocking of pizzaController
    app.use("/pizzas", pizzaRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET /pizzas should call pizzaController.list", async () => {
    const response = await request(app).get("/pizzas");

    expect(response.status).toEqual(200);
    expect(pizzaController.list).toBeCalledTimes(1);
  });

  it("GET /pizzas/:id should call pizzaController.show", async () => {
    const app = express();

    app.use("/pizzas", pizzaRouter);

    const response = await request(app).get("/pizzas/42");

    expect(response.status).toEqual(200);
    expect(pizzaController.list).toBeCalledTimes(0);
    expect(pizzaController.show).toBeCalledTimes(1);
  });
});
