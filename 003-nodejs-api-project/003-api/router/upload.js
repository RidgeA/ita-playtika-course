const {Router} = require('express');
const multer = require('multer')
const parse = require('csv-parse')
const fs = require('fs');
const {resolve} = require('path')
const {Writable} = require('stream')
const data = require('./../db/products.json')

const router = new Router();
const uploader = multer({dest: 'upload/'})
const parser = parse({
  columns: ['category0', 'category1', 'category2', 'sku', 'name', 'price', 'quantity', 'manufacturer', 'color'],
  fromLine: 2 // skip the first line with column headers
})

class DBWriter extends Writable {
  constructor() {
    super({
      objectMode: true
    })
  }

  _write(record, encoding, callback) {
    console.log(record);
    data.push({
      name: record.name,
    })
    callback()
  }
}

router.post('/upload',
  uploader.single('file'),
  (req, res, next) => {
    console.log(req.file);

    const input = fs.createReadStream(resolve(process.cwd(), req.file.path))
    const writer = new DBWriter()

    input
      .pipe(parser)
      .pipe(writer)

    writer.on('close', () => {
      res.send()
    })

  }
);

module.exports = router;
