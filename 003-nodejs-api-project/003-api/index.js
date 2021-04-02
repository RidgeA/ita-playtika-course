// commonjs
const config = require('config');
const express = require('express');
const router = require('./router/products');
const upload = require('./router/upload');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${req.httpVersion}`);
  console.log(req.body);
  next()
})

app.post('/',
  (req, res, next) => {
    console.log(req.query);
    next();
  },
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  (req, res, next) => {
    res.send({world: 'hello'});
  },
);

app.use(router);
app.use(upload);

app.listen(config.get('app.port'), (err) => {
  if (err) {
    console.error(error.message);
    process.exit(1);
  }
  console.log('Server started');
});
