const {compose} = require('compose-middleware');
const {checkSchema, validationResult} = require('express-validator');

const createValidator = checkSchema({
  category: {
    in: ['body'],
    isString: true,
    exists: true,
    isLength: {
      options: {
        max: 50,
      }
    }
  },
  subcategory: {
    in: ['body'],
    isString: true,
    exists: true,
    isLength: {
      options: {
        max: 50,
      }
    }
  },
  article: {
    in: ['body'],
    isString: true,
    optional: true,
  },
  name: {
    in: ['body'],
    isString: true,
    exists: true,
  },
  price: {
    in: ['body'],
    isFloat: {
      options: {
        gt: 0
      }
    },
    toFloat: true,
    exists: true,
  },
  quantity: {
    in: ['body'],
    isInt: {
      options: {
        gt: 0,
      }
    },
    toInt: true,
    exists: true,
  },
  manufacturer: {
    in: ['body'],
    isString: true,
    exists: true,
  },
  color: {
    in: ['body'],
    isString: true,
    optional: true,
  }
});

const updateValidator = checkSchema({
  category: {
    in: ['body'],
    isString: true,
    isLength: {
      options: {
        max: 50,
      }
    }
  },
  subcategory: {
    in: ['body'],
    isString: true,
    isLength: {
      options: {
        max: 50,
      }
    }
  },
  article: {
    in: ['body'],
    isString: true,
  },
  name: {
    in: ['body'],
    isString: true,
  },
  price: {
    in: ['body'],
    isFloat: {
      options: {
        gt: 0
      }
    },
    toFloat: true,
  },
  quantity: {
    in: ['body'],
    isInt: {
      options: {
        gt: 0,
      }
    },
    toInt: true,
  },
  manufacturer: {
    in: ['body'],
    isString: true,
  },
  color: {
    in: ['body'],
    isString: true,
  }
});

const idParamValidator = checkSchema({
  id: {
    in: ['params'],
    isUUID: {
      options: [4]
    },
  }
})

const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
}

module.exports = {
  create: compose([
    createValidator,
    checkValidationErrors,
  ]),

  update: compose([
    idParamValidator,
    updateValidator,
    checkValidationErrors,
  ]),

  idParam: compose([
    idParamValidator,
    checkValidationErrors,
  ])
}
