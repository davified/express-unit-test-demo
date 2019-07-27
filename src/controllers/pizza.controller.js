const pizzaController = {
  list: (req, res, next) => {
    res.json("listing all pizzas");
  },

  show: (req, res, next) => {
    res.json(`showing pizza with id ${req.params.id}`);
  }
};

module.exports = pizzaController;
