const uuid = require('uuid');

const filters = {
  "name": name => product => product.name.contains(name),
  "category": category => product => product.category === category,
  "price_from": priceFrom => product => product.price >= parseFloat(priceFrom),
  "price_to": priceTo => product => product.price <= parseFloat(priceTo),
}

function applyFilters(filters) {
  return (product) => {
    for (const filter of filters) {
      if (filter(product) === false) {
        return false
      }
    }
    return true
  }
}

class ProductsController {
  #repo

  constructor(repo) {
    this.#repo = repo;
  }

  getProducts = async (req, res) => {
    const products = await this.#repo.getAll();

    const filtersArray = Object.entries(req.query).reduce((acc, [paramName, paramValue]) => {
      if (paramName in filters) {
        acc.push(filters[paramName](paramValue));
      }
      return acc;
    }, []);

    return products.filter(applyFilters(filtersArray));
  }

  getById = async (req, res) => {
    const {id} = req.params;
    const product = await this.#repo.getById(id);
    if (!product) {
      return res.status(404).send({message: 'ProductDto not found'});
    }
    return product;
  }

  create = async (req, res, next) => {
    const newProduct = req.body;
    newProduct.id = uuid.v4();
    await this.#repo.create(newProduct);
    res.status = 201;
  }

  update = async (req, res, next) => {
    const updates = req.body;
    updates.id = req.params.id;
    await this.#repo.update(updates);
    res.status = 200;
  }

  delete = async (req, res, next) => {
    await this.#repo.delete(req.params.id);
    res.status = 204;
  }

}

module.exports = ProductsController
