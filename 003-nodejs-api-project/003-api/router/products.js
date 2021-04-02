const {Router} = require('express');
const productsController = require('./../controller/products')

const router = new Router();

const noop = (req, res) => {
  res.statusCode = 501;
  res.send();
}

router.get("/products", productsController.getAll);
router.get("/products/:id", productsController.getById);
router.post("/products", productsController.create);
router.put("/products/:id", noop);
router.delete("/products/:id", noop);

module.exports = router;
