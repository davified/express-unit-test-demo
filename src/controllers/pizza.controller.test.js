const pizzaController = require("./pizza.controller");
describe("Pizza Controller", () => {
  it("pizzaController.list should list all pizzas", () => {
    const mockResponse = {
      json: jest.fn()
    };
    pizzaController.list(null, mockResponse);

    expect(mockResponse.json).toBeCalledWith("listing all pizzas");
  });

  it("pizzaController.show should list a single pizza based on req.params.id", () => {
    const mockResponse = {
      json: jest.fn()
    };

    const request = {
      params: {
        id: 42
      }
    };
    pizzaController.show(request, mockResponse);

    expect(mockResponse.json).toBeCalledWith("showing pizza with id 42");
  });
});
