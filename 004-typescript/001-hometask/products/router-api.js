const {Router} = require('express');
const config = require('config');
const Storage = require('./../infrastracture/storage');
const Repository = require('./repository');
const Controller = require('./controller');
const validator = require('./validators');

const filePath = config.get('storage.file.path');
const storage = new Storage(filePath);
const repository = new Repository(storage);
const controller = new Controller(repository);

const router = new Router();

const wrapper = action => (req, res, next) =>
  Promise.resolve(action(req, res, next))
    .then(result => {
      if (result) {
        return res.json(result);
      }
      return res.end();
    })
    .catch(next);


router.get('/', wrapper(controller.getProducts));
router.get('/:id', validator.idParam, wrapper(controller.getById));
router.post('/', validator.create, wrapper(controller.create));
router.put('/:id', validator.update, wrapper(controller.update));
router.delete('/:id', validator.idParam, wrapper(controller.delete));

module.exports = router
