const data = require('./../db/products.json')

module.exports = {
  getAll(req, res) {
    res.send(data);
  },

  getById(req, res) {
    // req.params.id
    const id = Number(req.params.id)

    const product = data.find(item => item.id === id)

    if (!product) {
      res.status(404).send()
      return;
    }

    res.send(product);
  },

  create(req, res) {
    const {name} = req.body

    data.push({
      id: data.length + 1,
      name
    });

    res.status(201).send()
  }

}
