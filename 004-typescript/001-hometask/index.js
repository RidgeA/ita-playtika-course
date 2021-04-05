const config = require('config');
const app = require('./infrastracture/server');
const productsRouter = require('./products/router-api');

const port = config.get('app.port')

app.use('/products', productsRouter);

app.listen(port);
