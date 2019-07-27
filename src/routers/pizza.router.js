const express = require("express");
const pizzaController = require("../controllers/pizza.controller");
const router = express.Router();

router.get("/", pizzaController.list);
router.get("/:id", pizzaController.show);

module.exports = router;
